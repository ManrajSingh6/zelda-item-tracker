import { ItemCard } from '../components/cards/itemCard'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { useFetchEquipment } from '../hooks/queries/useFetchEquipment'

export function EquipmentPage(): JSX.Element {
  const { equipment, loading } = useFetchEquipment()

  const cardElements = equipment.map((equip) => {
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
    <div className='mt-4'>
      <PageHeader
        header='Equipment'
        subText='Weapons, shields, and outfits grant unique powers and strategies, essential for conquering the challenges of Hyrule.'
      />
      <div className='mt-4'>
        <Grid elementsLoading={loading} elements={cardElements} />
      </div>
    </div>
  )
}
