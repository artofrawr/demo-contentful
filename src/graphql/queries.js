import { gql } from '@apollo/client'
import { addApolloState, initializeApollo } from './apollo'

import { FRAGMENT_COMPONENTS } from './fragments'

export const PAGE_QUERY_BYSLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        name
        slug
        componentsCollection {
          total
          items {
            __typename
            ...heroFields
            ...featuresFields
            ...imageContentFields
          }
        }
      }
    }
  }
  ${FRAGMENT_COMPONENTS}
`

export const getPagePropsBySlug = async (slug) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: PAGE_QUERY_BYSLUG,
    variables: { slug },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
