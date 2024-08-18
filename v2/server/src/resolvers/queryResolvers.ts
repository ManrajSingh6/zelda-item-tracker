import { GraphQLError } from 'graphql'
import { SuperAgentStatic } from 'superagent'
import { Equipment, Monster } from '../graphql/gen/gen-types'
import { HYRULE_API_VERSION } from '../utils/constants'
import { MonsterApiResponse } from '../types/monsterTypes'
import { QueryCategoryApiResponse } from '../types/queryTypes'
import { EquipmentApiResponse } from '../types/equipmentTypes'

const CATEGORY_ENDPOINT = 'compendium/category'

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
  readonly equipment: (
    parent: unknown,
    args: unknown,
    context: unknown,
  ) => Promise<readonly Equipment[] | GraphQLError>
}

export function createQueryResolvers({
  fetcher,
  compendiumApiBaseUrl,
}: QueryResolverOpts): QueryResolvers {
  const formattedCategoryEndpoint = `${compendiumApiBaseUrl}/${HYRULE_API_VERSION}/${CATEGORY_ENDPOINT}`

  async function monsters(
    _parent: unknown,
    _args: unknown,
    _context: unknown,
  ): Promise<readonly Monster[] | GraphQLError> {
    try {
      const response: QueryCategoryApiResponse<MonsterApiResponse> = (
        await fetcher.get(`${formattedCategoryEndpoint}/monsters`)
      ).body

      return response.data.map((apiMonster) => ({
        id: apiMonster.id,
        name: apiMonster.name,
        category: 'Monsters',
        description: apiMonster.description,
        image: apiMonster.image,
        commonLocations: apiMonster.common_locations ?? [],
        drops: apiMonster.drops ?? [],
        isDlc: apiMonster.dlc,
      }))
    } catch (error) {
      console.error(`Error fetching monsters, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching monsters.')
    }
  }

  async function equipment(
    _parent: unknown,
    _args: unknown,
    _context: unknown,
  ): Promise<readonly Equipment[] | GraphQLError> {
    try {
      const response: QueryCategoryApiResponse<EquipmentApiResponse> = (
        await fetcher.get(`${formattedCategoryEndpoint}/equipment`)
      ).body

      return response.data.map((apiEquipment) => ({
        id: apiEquipment.id,
        name: apiEquipment.name,
        category: 'Equipment',
        description: apiEquipment.description,
        image: apiEquipment.image,
        commonLocations: apiEquipment.common_locations ?? [],
        properties: {
          attackDamage: apiEquipment.properties.attack,
          defense: apiEquipment.properties.defense,
          effect:
            apiEquipment.properties.effect !== ''
              ? apiEquipment.properties.effect
              : null,
          type: apiEquipment.properties.type,
        },
        isDlc: apiEquipment.dlc,
      }))
    } catch (error) {
      console.error(`Error fetching equipment, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching equipment.')
    }
  }

  return Object.freeze({ monsters, equipment })
}
