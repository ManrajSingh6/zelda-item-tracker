import { GraphQLError } from 'graphql'
import { SuperAgentStatic } from 'superagent'
import {
  Creature,
  Equipment,
  Material,
  Monster,
  QueryCreaturesArgs,
  Treasure,
} from '../graphql/gen/gen-types'
import { HYRULE_API_VERSION } from '../utils/constants'
import { MonsterApiResponse } from '../types/monsterTypes'
import { QueryCategoryApiResponse } from '../types/queryTypes'
import { EquipmentApiResponse } from '../types/equipmentTypes'
import { MaterialApiResponse } from '../types/materialTypes'
import { CreatureApiResponse } from '../types/creaturesTypes'
import { TreasureApiResponse } from '../types/treasureTypes'

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
  readonly materials: (
    parent: unknown,
    args: unknown,
    context: unknown,
  ) => Promise<readonly Material[] | GraphQLError>
  readonly creatures: (
    parent: unknown,
    args: QueryCreaturesArgs,
    context: unknown,
  ) => Promise<readonly Creature[] | GraphQLError>
  readonly treasure: (
    parent: unknown,
    args: unknown,
    context: unknown,
  ) => Promise<readonly Treasure[] | GraphQLError>
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

  async function materials(
    _parent: unknown,
    _args: unknown,
    _context: unknown,
  ): Promise<readonly Material[] | GraphQLError> {
    try {
      const response: QueryCategoryApiResponse<MaterialApiResponse> = (
        await fetcher.get(`${formattedCategoryEndpoint}/materials`)
      ).body

      return response.data.map((apiMaterial) => ({
        id: apiMaterial.id,
        name: apiMaterial.name,
        category: 'Materials',
        description: apiMaterial.description,
        image: apiMaterial.image,
        commonLocations: apiMaterial.common_locations ?? [],
        heartsRecovered: apiMaterial.hearts_recovered,
        fuseAttackPower: apiMaterial.fuse_attack_power,
        cookingEffect:
          apiMaterial.cooking_effect !== '' ? apiMaterial.cooking_effect : null,
        isDlc: apiMaterial.dlc,
      }))
    } catch (error) {
      console.error(`Error fetching materials, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching materials.')
    }
  }

  async function creatures(
    _parent: unknown,
    { filters }: QueryCreaturesArgs,
    _context: unknown,
  ): Promise<readonly Creature[] | GraphQLError> {
    try {
      const response: QueryCategoryApiResponse<CreatureApiResponse> = (
        await fetcher.get(`${formattedCategoryEndpoint}/creatures`)
      ).body

      const { isEdible } = filters ?? {}

      const transformedResponse: readonly Creature[] = response.data.map(
        (apiCreature) => ({
          id: apiCreature.id,
          name: apiCreature.name,
          category: 'Creatures',
          description: apiCreature.description,
          image: apiCreature.image,
          commonLocations: apiCreature.common_locations ?? [],
          heartsRecovered: apiCreature.hearts_recovered ?? null,
          cookingEffect:
            apiCreature.cooking_effect !== ''
              ? apiCreature.cooking_effect
              : null,
          isDlc: apiCreature.dlc,
          isEdible: apiCreature.edible,
          drops: apiCreature.drops ?? [],
        }),
      )

      return isEdible != undefined
        ? transformedResponse.filter((c) => c.isEdible === isEdible)
        : transformedResponse
    } catch (error) {
      console.error(`Error fetching creatures, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching creatures.')
    }
  }

  async function treasure(
    _parent: unknown,
    _args: unknown,
    _context: unknown,
  ): Promise<readonly Treasure[] | GraphQLError> {
    try {
      const response: QueryCategoryApiResponse<TreasureApiResponse> = (
        await fetcher.get(`${formattedCategoryEndpoint}/treasure`)
      ).body

      return response.data.map((apiTreasure) => ({
        id: apiTreasure.id,
        name: apiTreasure.name,
        category: 'Treasure',
        description: apiTreasure.description,
        image: apiTreasure.image,
        commonLocations: apiTreasure.common_locations ?? [],
        drops: apiTreasure.drops ?? [],
        isDlc: apiTreasure.dlc,
      }))
    } catch (error) {
      console.error(`Error fetching treasure, error=${JSON.stringify(error)}`)
      return new GraphQLError('Error fetching treasure.')
    }
  }

  return Object.freeze({ monsters, equipment, materials, creatures, treasure })
}
