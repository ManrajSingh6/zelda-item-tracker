import { EquipmentFragment, MonsterFragment } from '../graphql/gen/gen-types'
import { ZERO } from './constants'

type FilterableCard = MonsterFragment | EquipmentFragment

function textFilter(text: string, searchTerm: string): boolean {
  return text.toLowerCase().includes(searchTerm.toLowerCase())
}

export function sliceAndFilterCards(
  cards: readonly FilterableCard[],
  sliceLimit: number,
  filterSearchTerm: string
): readonly FilterableCard[] {
  return cards
    .slice(ZERO, sliceLimit)
    .filter((card) => textFilter(card.name, filterSearchTerm))
}
