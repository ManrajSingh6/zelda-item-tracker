/* eslint-disable @typescript-eslint/naming-convention */

import { BaseCategoryFieldsApiResponse } from './categoryTypes'

export interface CreatureApiResponse extends BaseCategoryFieldsApiResponse {
  readonly cooking_effect: string
  readonly edible: boolean
  readonly hearts_recovered: number | undefined
  readonly drops: readonly string[] | null | undefined
}
