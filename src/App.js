import React  from 'react'
/* Apollo. */
import { ApolloProvider } from 'react-apollo'
/* Helpers. */
import { client } from './helpers/apollo-helper'
/* Screens. */
import Github from './screens/Github'
/* Styleron. */
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
/* Atomize. */
import { StyleReset } from 'atomize'

/* Ignore this, it's just for styletron. */
const debug = new DebugEngine()
const engine = new Styletron()

const App = () => (
  <ApolloProvider client={client}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset/>
      <Github/>
    </StyletronProvider>
  </ApolloProvider>
)

export default App 