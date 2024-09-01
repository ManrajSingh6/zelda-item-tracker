import { useState } from 'react'
import { CardFace } from './cardFace'
import { BadgeContainer } from '../common/badge'
import { CardDescription } from './cardDescription'
import { CardTitle } from './cardTitle'

export interface ItemCardProps {
  readonly baseDetails: {
    readonly id: number
    readonly name: string
    readonly category: string
    readonly description: string
    readonly image: string
    readonly commonLocations: readonly string[]
    readonly isDlc: boolean
  }
  readonly extraDetails?: {
    readonly drops?: readonly string[]
  }
}

export function ItemCard({
  baseDetails,
  extraDetails
}: ItemCardProps): JSX.Element {
  const [showFace, setShowFace] = useState(true)

  const { id, name, description, image, commonLocations, isDlc } = baseDetails
  const { drops } = extraDetails ?? {}

  return (
    <div
      onClick={() => setShowFace((prev) => !prev)}
      className={`flex cursor-pointer flex-col ${showFace ? 'gap-4' : 'gap-2'} rounded-xl border border-accent border-opacity-15 p-4 transition-opacity duration-300 ease-in-out`}
    >
      {showFace ? (
        <CardFace id={id} imageSrc={image} title={name} />
      ) : (
        <>
          <CardTitle title={name} isDlc={isDlc} />
          <CardDescription description={description} />
          <BadgeContainer
            badges={commonLocations}
            header={commonLocations.length ? 'Locations' : ''}
            badgeStyle={{
              backgroundColor: '#6366f1',
              textColor: '#FFFFFF'
            }}
          />
          {drops?.length ? (
            <BadgeContainer
              badges={drops}
              header={'Drops'}
              badgeStyle={{
                backgroundColor: '#065F46',
                textColor: '#D1FAE5'
              }}
            />
          ) : undefined}
        </>
      )}
    </div>
  )
}
