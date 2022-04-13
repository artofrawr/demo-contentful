import { gql } from '@apollo/client'

export const FRAGMENT_HERO = gql`
  fragment heroFields on Hero {
    sys {
      id
    }
    title
    copy
  }
`

export const FRAGMENT_FEATURES = gql`
  fragment featuresFields on Features {
    sys {
      id
    }
  }
`

export const FRAGMENT_IMAGE_CONTENT = gql`
  fragment imageContentFields on Imagecontent {
    sys {
      id
    }
  }
`
export const FRAGMENT_COMPONENTS = gql`
  ${FRAGMENT_HERO}
  ${FRAGMENT_FEATURES}
  ${FRAGMENT_IMAGE_CONTENT}
`