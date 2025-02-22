import type { Pokemon_V2_Pokemon } from '~/generated/graphql'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { client } from '~/apollo'
import { GET_POKEMONS } from '~/queries/pokemons'

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref<Pokemon_V2_Pokemon[]>([])

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

  return {
    pokemons,
    page,
    fetchPokemons,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePokemonsStore, import.meta.hot))
}
