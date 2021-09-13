import React  from 'react'
/* Apollo. */
import { ApolloProvider } from 'react-apollo'
/* Helpers. */
import { client } from './helpers/graphql-helper'
/* Screens. */
import Github from './screens/Github'

const App = () => (
  <ApolloProvider client={client}>
    <Github/>
  </ApolloProvider>
)

export default App 