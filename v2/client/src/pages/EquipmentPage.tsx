import { useState } from 'react'
import { ItemCard } from '../components/cards/itemCard'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { TextInput } from '../components/common/searchInput'
import { useFetchEquipment } from '../hooks/queries/useFetchEquipment'

export function EquipmentPage(): JSX.Element {
  const { equipment, loading } = useFetchEquipment()

  // TODO: create a debounce hook for this searching/any callback fn passed into the hook
  const [searchTerm, setSearchTerm] = useState('')

  const cardElements = equipment
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <PageHeader
        header='Equipment'
        subText='Weapons, shields, and outfits grant unique powers and strategies, essential for conquering the challenges of Hyrule.'
      />
      <TextInput
        label='Search Equipment'
        value={searchTerm}
        onChange={(input) => setSearchTerm(input)}
      />
      <Grid elementsLoading={loading} elements={cardElements} />
    </div>
  )
}
