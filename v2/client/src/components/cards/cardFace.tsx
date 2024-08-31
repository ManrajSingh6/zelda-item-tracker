interface CardFaceProps {
  readonly id: number
  readonly imageSrc: string
  readonly title: string
}

export function CardFace({ id, imageSrc, title }: CardFaceProps): JSX.Element {
  return (
    <>
      <img src={imageSrc} alt='card-item-img' className='rounded-lg' />
      <div>
        <p className='text-xs text-accentIndigo'>ID: {id}</p>
        <h1 className='font-semibold capitalize text-accent'>{title}</h1>
      </div>
    </>
  )
}
