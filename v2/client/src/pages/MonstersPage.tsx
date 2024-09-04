import { ItemCard } from '../components/cards/itemCard'
import { Grid } from '../components/common/grid'
import { PageHeader } from '../components/common/pageHeader'
import { useFetchMonsters } from '../hooks/queries/useFetchMonsters'

export function MonstersPage(): JSX.Element {
  const { monsters, loading } = useFetchMonsters()

  const cardElements = monsters.map((mon) => {
    return (
      <ItemCard
        key={`mon-card-item-${mon.id}`}
        baseDetails={{
          ...mon
        }}
        extraDetails={{
          drops: mon.drops
        }}
      />
    )
  })

  return (
    <div className='mt-4'>
      <PageHeader
        header='Monsters'
        subText="Fierce and varied enemies roam Hyrule and test Link's combat prowess and survival skills, turning every battle into a thrilling challenge in his epic quest."
      />
      <div className='mt-4'>
        <Grid elementsLoading={loading} elements={cardElements} />
      </div>
    </div>
  )
}
