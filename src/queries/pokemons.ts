import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, order_by: { id: asc }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }
`
