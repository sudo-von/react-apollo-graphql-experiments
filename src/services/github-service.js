/* Graphql. */
import gql from 'graphql-tag'

const getRepositories = gql`
    query($name: String!){
        search(query: $name, last: 10, type: REPOSITORY) {
        edges {
            node {
            ... on Repository {
                id
                name
                description
                url
            }
            }
        }
        }
    }
`

export {
    getRepositories
}