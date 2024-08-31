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

const EQUIPMENT_PROPERTIES_FRAGMENT = gql`
  fragment EquipmentProperties on EquipmentProperty {
    attackDamage
    defense
  }
`

const EQUIPMENT_FRAGMENT = gql`
  fragment Equipment on Equipment {
    id
    name
    description
    category
    commonLocations
    image
    isDlc
    properties {
      ...EquipmentProperties
    }
  }

  ${EQUIPMENT_PROPERTIES_FRAGMENT}
`

export const ALL_EQUIPMENT_QUERY = gql`
  query Equipment {
    equipment {
      ...Equipment
    }
  }

  ${EQUIPMENT_FRAGMENT}
`
