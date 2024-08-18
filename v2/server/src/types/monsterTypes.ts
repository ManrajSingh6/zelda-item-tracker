import { BaseCategoryFieldsApiResponse } from './categoryTypes'

export interface MonsterApiResponse extends BaseCategoryFieldsApiResponse {
  readonly drops: readonly string[] | null
}
