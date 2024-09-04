import { CardTitle } from './cardTitle'

interface CardFaceProps {
  readonly id: number
  readonly imageSrc: string
  readonly title: string
  readonly isDlc: boolean
}

export function CardFace({
  id,
  imageSrc,
  title,
  isDlc
}: CardFaceProps): JSX.Element {
  return (
    <>
      <img src={imageSrc} alt='card-item-img' className='rounded-lg' />
      <div>
        <p className='text-xs text-accentIndigo'>ID: {id}</p>
        <CardTitle title={title} isDlc={isDlc} />
      </div>
    </>
  )
}
