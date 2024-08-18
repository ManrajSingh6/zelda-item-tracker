import { BaseCategoryFieldsApiResponse } from './categoryTypes'

interface EquipmentPropertyApiResponse {
  readonly attack: number | null
  readonly defense: number | null
  readonly effect: string
  readonly type: string | null
}

export interface EquipmentApiResponse extends BaseCategoryFieldsApiResponse {
  readonly properties: EquipmentPropertyApiResponse
}
