import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const link = createHttpLink({
  // Pokemon api graphql url
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
