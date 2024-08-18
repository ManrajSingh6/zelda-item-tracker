/* eslint-disable @typescript-eslint/naming-convention */

import { BaseCategoryFieldsApiResponse } from './categoryTypes'

export interface MaterialApiResponse extends BaseCategoryFieldsApiResponse {
  readonly hearts_recovered: number
  readonly cooking_effect: string
  readonly fuse_attack_power: number | null
}
