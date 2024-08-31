import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { useFetchEquipment } from '../hooks/queries/useFetchEquipment'

export function EquipmentPage(): JSX.Element {
  const { equipment, loading } = useFetchEquipment()

  console.log(equipment)

  return (
    <div className='mt-4'>
      <PageHeader
        header='Equipment'
        subText='Weapons, shields, and outfits grant unique powers and strategies, essential for conquering the challenges of Hyrule.'
      />
      <div className='mt-4'>
        <Grid elementsLoading={loading} elements={[]} />
      </div>
    </div>
  )
}
