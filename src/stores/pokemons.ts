import type { Pokemon_V2_Pokemon } from '~/generated/graphql'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { client } from '~/apollo'
import { GET_POKEMONS } from '~/queries/pokemons'

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref<Pokemon_V2_Pokemon[]>([])

  async function fetchPokemons(): Promise<Pokemon_V2_Pokemon[]> {
    const { data } = await client.query({
      query: GET_POKEMONS,
    })
    pokemons.value = data.pokemon_v2_pokemon

    return data.pokemon_v2_pokemon
  }

  return {
    pokemons,
    fetchPokemons,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePokemonsStore, import.meta.hot))
}
