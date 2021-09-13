import React  from 'react'
/* Apollo. */
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const token = process.env.REACT_APP_TOKEN

const httpLink = {
  hri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  }
}

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      asdsad
    </div>
  </ApolloProvider>
)

export default App