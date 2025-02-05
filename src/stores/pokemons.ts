import type { GetPokemonsQuery, GetPokemonsQueryVariables } from '~/generated/graphql'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { client } from '~/apollo'
import { GET_POKEMONS } from '~/queries/pokemons'

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref<GetPokemonsQuery['pokemon_v2_pokemon']>([])

  async function fetchPokemons(): Promise<GetPokemonsQuery['pokemon_v2_pokemon']> {
    const { data } = await client.query<GetPokemonsQuery, GetPokemonsQueryVariables>({
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
