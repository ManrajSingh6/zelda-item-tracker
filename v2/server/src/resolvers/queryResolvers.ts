import { GraphQLError } from 'graphql'
import { SuperAgentStatic } from 'superagent'
import { Monster } from '../graphql/gen/gen-types'
import { HYRULE_API_VERSION } from '../utils/constants'
import { QueryMonstersApiResponse } from '../types/monsterTypes'

const MONSTERS_ENDPOINT = 'compendium/category/monsters'

interface QueryResolverOpts {
  readonly fetcher: SuperAgentStatic
  readonly compendiumApiBaseUrl: string
}

export interface QueryResolvers {
  readonly monsters: (
    parent: unknown,
    args: unknown,
    context: unknown,
  ) => Promise<readonly Monster[] | GraphQLError>
}

export function createQueryResolvers({
  fetcher,
  compendiumApiBaseUrl,
}: QueryResolverOpts): QueryResolvers {
  async function monsters(
    _parent: unknown,
    _args: unknown,
    _context: unknown,
  ): Promise<readonly Monster[] | GraphQLError> {
    try {
      const response: QueryMonstersApiResponse = (
        await fetcher.get(
          `${compendiumApiBaseUrl}/${HYRULE_API_VERSION}/${MONSTERS_ENDPOINT}`,
        )
      ).body

      return response.data.map((apiMonster) => {
        return {
          id: apiMonster.id,
          name: apiMonster.name,
          category: 'Monsters',
          description: apiMonster.description,
          image: apiMonster.image,
          commonLocations: apiMonster.common_locations ?? [],
          drops: apiMonster.drops ?? [],
          isDlc: apiMonster.dlc,
        }
      })
    } catch (error) {
      console.error(`Error fetching monsters, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching monsters.')
    }
  }

  return Object.freeze({ monsters })
}
