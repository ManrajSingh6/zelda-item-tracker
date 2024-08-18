/* eslint-disable @typescript-eslint/naming-convention */

interface EquipmentPropertyApiResponse {
  readonly attack: number
  readonly defense: number
  readonly effect: string
  readonly type: string
}

export interface EquipmentApiResponse {
  readonly id: number
  readonly name: string
  readonly category: string
  readonly description: string
  readonly image: string
  readonly common_locations: readonly string[] | null
  readonly properties: EquipmentPropertyApiResponse
  readonly dlc: boolean
}
