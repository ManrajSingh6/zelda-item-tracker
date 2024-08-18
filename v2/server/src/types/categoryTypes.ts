/* eslint-disable @typescript-eslint/naming-convention */

export interface BaseCategoryFieldsApiResponse {
  readonly id: number
  readonly name: string
  readonly category: string
  readonly description: string
  readonly image: string
  readonly common_locations: readonly string[] | null
  readonly dlc: boolean
}
