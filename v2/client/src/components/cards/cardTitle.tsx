import { BadgeContainer } from '../common/badge'

interface CardTitleProps {
  readonly title: string
  readonly isDlc: boolean
}

export function CardTitle({ title, isDlc }: CardTitleProps): JSX.Element {
  return (
    <div className='flex justify-between'>
      <p className='text-sm font-semibold capitalize'>{title}</p>
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
  )
}
