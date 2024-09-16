import { useState } from 'react'
import { ItemCard } from '../components/cards/itemCard'
import { Dropdown, DropdownOption } from '../components/common/dropdown'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { useFetchMonsters } from '../hooks/queries/useFetchMonsters'
import { useDebounce } from '../hooks/useDebounce'
import { DEFAULT_DROPDOWN_OPTS, NO_DROPDOWN_ITEMS } from '../utils/defaults'
import { sliceAndFilterCards } from '../utils/filters'
import { TextInput } from '../components/common/searchInput'

export function MonstersPage(): JSX.Element {
  const { monsters, loading } = useFetchMonsters()

  const [dropdownDisplayCount, setDropdownDisplayCount] =
    useState<DropdownOption>(getDefaultDropdownOption())

  const [searchTerm, setSearchTerm] = useState('')

  const { debouncedValue: debouncedSearchTerm } = useDebounce({
    value: searchTerm
  })

  // Can assert type because dropdown values in this context are numbers
  const slicedAndFilteredMonsters = sliceAndFilterCards(
    monsters,
    dropdownDisplayCount.value as number,
    debouncedSearchTerm
  )

  const cardElements = slicedAndFilteredMonsters.map((mon) => {
    const dropsExists = 'drops' in mon
    return (
      <ItemCard
        key={`mon-card-item-${mon.id}`}
        baseDetails={{
          ...mon
        }}
        extraDetails={{
          drops: dropsExists ? mon.drops : undefined
        }}
      />
    )
  })

  function getDefaultDropdownOption(): DropdownOption {
    return {
      label: 'All',
      value: loading ? NO_DROPDOWN_ITEMS : monsters.length
    }
  }

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <PageHeader
        header='Monsters'
        subText="Fierce and varied enemies roam Hyrule and test Link's combat prowess and survival skills, turning every battle into a thrilling challenge in his epic quest."
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
