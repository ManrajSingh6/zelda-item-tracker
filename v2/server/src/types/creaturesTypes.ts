/* eslint-disable @typescript-eslint/naming-convention */

export interface CreatureApiResponse {
  readonly id: number
  readonly name: string
  readonly category: string
  readonly description: string
  readonly image: string
  readonly common_locations: readonly string[] | null
  readonly cooking_effect: string
  readonly edible: boolean
  readonly hearts_recovered: number | undefined
  readonly dlc: boolean
  readonly drops: readonly string[] | null | undefined
}
