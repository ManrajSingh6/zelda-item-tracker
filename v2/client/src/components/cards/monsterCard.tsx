import { useState } from 'react'
import { MonsterFragment } from '../../graphql/gen/gen-types'
import { CardFace } from './cardFace'
import { BadgeContainer } from '../common/badge'
import { CardDescription } from './cardDescription'
import { CardTitle } from './cardTitle'

interface MonsterCardProps {
  readonly monster: MonsterFragment
}

export function MonsterCard({ monster }: MonsterCardProps): JSX.Element {
  const [showFace, setShowFace] = useState(true)

  const { id, name, description, commonLocations, image, drops, isDlc } =
    monster

  return (
    <div
      onClick={() => setShowFace((prev) => !prev)}
      className='flex cursor-pointer flex-col gap-4 rounded-xl border border-accent border-opacity-15 p-4 transition-opacity duration-300 ease-in-out'
    >
      {showFace ? (
        <CardFace id={id} imageSrc={image} title={name} />
      ) : (
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <CardTitle title={name} />
            {isDlc && (
              <BadgeContainer
                badges={['DLC']}
                badgeStyle={{
                  backgroundColor: '#F2C335',
                  textColor: '#FFFFFF'
                }}
              />
            )}
          </div>
          <CardDescription description={description} />
          <BadgeContainer
            badges={commonLocations}
            header={commonLocations.length ? 'Locations' : ''}
            badgeStyle={{
              backgroundColor: '#6366f1',
              textColor: '#FFFFFF'
            }}
          />
          <BadgeContainer
            badges={drops}
            header={drops.length ? 'Drops' : ''}
            badgeStyle={{
              backgroundColor: '#065F46',
              textColor: '#D1FAE5'
            }}
          />
        </div>
      )}
    </div>
  )
}
