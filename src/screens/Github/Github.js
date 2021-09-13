import React from 'react'
/* Apollo. */
import { graphql } from 'react-apollo'
/* Services. */
import { getRepositories } from '../../services/github-service'
/* Atomize components. */
import { Container, Row, Col, Div, Text } from 'atomize'

const Github = ({ data }) => {

  /* Destructuring data. */
  const { loading, search } = data

  return (
    <Container bg='info900' d='flex' flexDir='column' justify='center' align='center' minH={{ md: '100vh' }}>
      <Row>
        <Col size='12'>
          { loading &&
            <Div p='1rem' bg='white' rounded='sm' m='3rem' shadow='3'>
              <Text tag='h1'>Loading repositories...</Text>
            </Div>
          }
          {
            search && search.edges.map(({node}) =>
              <Div p='1rem' bg='white' rounded='sm' m='3rem' shadow='3'>
                <Text tag='h1'>ID</Text>
                <p>{node.id}</p>
                <Text tag='h1'>Name</Text>
                <p>{node.name}</p>
                <Text tag='h1'>Description</Text>
                <p>{node.description}</p>
                <Text tag='h1'>URL</Text>
                <p><a href={node.url} target='blank'>{node.url}</a></p>
              </Div>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}

/* High order component. */
const GithubWithData = graphql(
  getRepositories,
  {
    options: {
      variables: {
        name: 'hacking'
      }
    }
  }
)(Github)

export default GithubWithData
