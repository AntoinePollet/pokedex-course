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

export const GET_POKEMON_BY_ID = gql`
  query getPokemon($id: Int) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonabilities {
        ability_id
        is_hidden
        pokemon_v2_ability {
          name
          pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
            short_effect
            effect
          }
        }
      }
    }
  }
`
