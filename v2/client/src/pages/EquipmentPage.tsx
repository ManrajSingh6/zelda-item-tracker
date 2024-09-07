import { useState } from 'react'
import { ItemCard } from '../components/cards/itemCard'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { TextInput } from '../components/common/searchInput'
import { useFetchEquipment } from '../hooks/queries/useFetchEquipment'
import { useDebounce } from '../hooks/useDebounce'
import { Dropdown, DropdownOption } from '../components/common/dropdown'
import { ZERO } from '../utils/constants'
import { DEFAULT_DROPDOWN_OPTS, NO_DROPDOWN_ITEMS } from '../utils/defaults'

export function EquipmentPage(): JSX.Element {
  const { equipment, loading } = useFetchEquipment()

  const [dropdownDisplayCount, setDropdownDisplayCount] =
    useState<DropdownOption>(getDefaultDropdownOption())

  const [searchTerm, setSearchTerm] = useState('')

  const { debouncedValue: debouncedSearchTerm } = useDebounce({
    value: searchTerm
  })

  const cardElements = equipment
    // Can assert type because dropdown values in this context are numbers
    .slice(ZERO, dropdownDisplayCount.value as number)
    .filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    .map((equip) => {
      return (
        <ItemCard
          key={`equip-card-item-${equip.id}`}
          baseDetails={{
            ...equip
          }}
          extraDetails={{
            equipmentProperties: {
              attackDamage: equip.properties.attackDamage ?? undefined,
              defense: equip.properties.defense ?? undefined
            }
          }}
        />
      )
    })

  function handleDropdownChange(option: DropdownOption | null): void {
    if (option) {
      setDropdownDisplayCount(option)
    }
  }

  function getDefaultDropdownOption(): DropdownOption {
    return {
      label: 'All',
      value: loading ? NO_DROPDOWN_ITEMS : equipment.length
    }
  }

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <PageHeader
        header='Equipment'
        subText='Weapons, shields, and outfits grant unique powers and strategies, essential for conquering the challenges of Hyrule.'
      />
      <div className='flex flex-row justify-between gap-2'>
        <TextInput
          label='Search Equipment'
          value={searchTerm}
          onChange={(input) => setSearchTerm(input)}
        />
        <Dropdown
          dropdownLabel='Display'
          selectedOption={dropdownDisplayCount}
          defaultOption={getDefaultDropdownOption()}
          options={DEFAULT_DROPDOWN_OPTS}
          onSelect={handleDropdownChange}
        />
      </div>
      <Grid elementsLoading={loading} elements={cardElements} />
    </div>
  )
}
