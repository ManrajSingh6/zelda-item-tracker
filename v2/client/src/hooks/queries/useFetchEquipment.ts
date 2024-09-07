import { useEffect, useState } from 'react'
import { ApolloError, useQuery } from '@apollo/client'
import {
  EquipmentFragment,
  EquipmentQuery,
  EquipmentQueryVariables
} from '../../graphql/gen/gen-types'
import { ALL_EQUIPMENT_QUERY } from '../../graphql/queries/itemQueries'

interface UseFetchEquipmentReturn {
  readonly equipment: readonly EquipmentFragment[]
  readonly loading: boolean
  readonly error: ApolloError | undefined
}

export function useFetchEquipment(): UseFetchEquipmentReturn {
  const [equipment, setEquipment] = useState<readonly EquipmentFragment[]>([])

  const { data, loading, error } = useQuery<
    EquipmentQuery,
    EquipmentQueryVariables
  >(ALL_EQUIPMENT_QUERY, {
    fetchPolicy: 'network-only'
  })

  useEffect(() => {
    // Only update data if it exists, otherwise keep the last success state
    if (data?.equipment) {
      setEquipment(data.equipment)
    }
  }, [data])

  return {
    equipment,
    loading,
    error
  }
}
