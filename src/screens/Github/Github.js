import React from 'react'
/* Apollo. */
import { graphql } from 'react-apollo'
/* Services. */
import { getRepositories } from '../../services/github-service'

const Github = (props) => {
  console.log(props)
  return (
    <div>
      Hello
    </div>
  )
}

/* High order component. */
const GithubWithData = graphql(
  getRepositories,
  {
    options: {
      variables: {
        name: 'von'
      }
    }
  }
)(Github)

export default GithubWithData
