/* Apollo. */
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const token = process.env.REACT_APP_TOKEN

const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  }
}

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
})

export {
  client
}