import { gql } from '@apollo/client'

const MONSTERS_FRAGMENT = gql`
  fragment Monster on Monster {
    id
    name
    description
    category
    commonLocations
    drops
    image
    isDlc
  }
`

export const ALL_MONSTERS_QUERY = gql`
  query Monsters {
    monsters {
      ...Monster
    }
  }

  ${MONSTERS_FRAGMENT}
`
