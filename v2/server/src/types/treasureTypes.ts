import { BaseCategoryFieldsApiResponse } from './categoryTypes'

export interface TreasureApiResponse extends BaseCategoryFieldsApiResponse {
  readonly drops: readonly string[] | null
}
