import { useEffect, useState } from 'react'
import { ApolloError, useQuery } from '@apollo/client'
import {
  MonsterFragment,
  MonstersQuery,
  MonstersQueryVariables
} from '../../graphql/gen/gen-types'
import { ALL_MONSTERS_QUERY } from '../../graphql/queries/itemQueries'

interface UseFetchMonstersReturn {
  readonly monsters: readonly MonsterFragment[]
  readonly loading: boolean
  readonly error: ApolloError | undefined
}

export function useFetchMonsters(): UseFetchMonstersReturn {
  const [monsters, setMonsters] = useState<readonly MonsterFragment[]>([])

  const { data, loading, error } = useQuery<
    MonstersQuery,
    MonstersQueryVariables
  >(ALL_MONSTERS_QUERY)

  useEffect(() => {
    // Only update data if it exists, otherwise keep the last success state
    if (data?.monsters) {
      setMonsters(data.monsters)
    }
  }, [data])

  return {
    monsters,
    loading,
    error
  }
}
