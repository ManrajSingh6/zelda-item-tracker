import { useState } from 'react'
import { ItemCard } from '../components/cards/itemCard'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { TextInput } from '../components/common/searchInput'
import { useFetchEquipment } from '../hooks/queries/useFetchEquipment'
import { useDebounce } from '../hooks/useDebounce'
import { Dropdown, DropdownOption } from '../components/common/dropdown'
import { DEFAULT_DROPDOWN_OPTS, NO_DROPDOWN_ITEMS } from '../utils/defaults'
import { sliceAndFilterCards } from '../utils/filters'

export function EquipmentPage(): JSX.Element {
  const { equipment, loading } = useFetchEquipment()

  const [dropdownDisplayCount, setDropdownDisplayCount] =
    useState<DropdownOption>(getDefaultDropdownOption())

  const [searchTerm, setSearchTerm] = useState('')

  const { debouncedValue: debouncedSearchTerm } = useDebounce({
    value: searchTerm
  })

  // Can assert type because dropdown values in this context are numbers
  const slicedFilteredEquipment = sliceAndFilterCards(
    equipment,
    dropdownDisplayCount.value as number,
    debouncedSearchTerm
  )

  const cardElements = slicedFilteredEquipment.map((equip) => {
    const equipPropertiesExist = 'properties' in equip
    return (
      <ItemCard
        key={`equip-card-item-${equip.id}`}
        baseDetails={{
          ...equip
        }}
        extraDetails={{
          equipmentProperties: equipPropertiesExist
            ? {
                attackDamage: equip.properties.attackDamage ?? undefined,
                defense: equip.properties.defense ?? undefined
              }
            : undefined
        }}
      />
    )
  })

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
          onSelect={(opt) => {
            opt && setDropdownDisplayCount(opt)
          }}
        />
      </div>
      <Grid elementsLoading={loading} elements={cardElements} />
    </div>
  )
}
