/* eslint-disable @typescript-eslint/naming-convention */

export interface MaterialApiResponse {
  readonly id: number
  readonly name: string
  readonly category: string
  readonly description: string
  readonly image: string
  readonly common_locations: readonly string[] | null
  readonly hearts_recovered: number
  readonly cooking_effect: string
  readonly fuseAttackPower: number | null
  readonly dlc: boolean
}
