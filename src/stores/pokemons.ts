import type { Pokemon_V2_Evolutionchain, Pokemon_V2_Pokemon } from '~/generated/graphql'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { client } from '~/apollo'
import { GET_POKEMON_BY_ID, GET_POKEMONS } from '~/queries/pokemons'

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref<Pokemon_V2_Pokemon[]>([])
  const pokemon = ref<Pokemon_V2_Pokemon>()
  const pokemonEvolutions = ref<Pokemon_V2_Evolutionchain>()

  const page = ref(1)
  const offset = computed(() => (page.value - 1) * 20)

  async function fetchPokemons(): Promise<Pokemon_V2_Pokemon[]> {
    const { data } = await client.query({
      query: GET_POKEMONS,
      variables: {
        limit: 20,
        offset: offset.value,
      },
    })
    pokemons.value = data.pokemon_v2_pokemon

    return data.pokemon_v2_pokemon
  }

  async function fetchPokemon(id: number): Promise<{ pokemon: Pokemon_V2_Pokemon, pokemonEvolutions: Pokemon_V2_Evolutionchain }> {
    const { data } = await client.query({
      query: GET_POKEMON_BY_ID,
      variables: {
        id,
      },
    })
    pokemon.value = data.pokemon_v2_pokemon[0]
    pokemonEvolutions.value = data.pokemon_v2_evolutionchain[0]

    return { pokemon: data.pokemon_v2_pokemon[0], pokemonEvolutions: data.pokemon_v2_evolutionchain[0] } as { pokemon: Pokemon_V2_Pokemon, pokemonEvolutions: Pokemon_V2_Evolutionchain }
  }

  return {
    pokemons,
    pokemon,
    pokemonEvolutions,
    page,
    fetchPokemons,
    fetchPokemon,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePokemonsStore, import.meta.hot))
}
