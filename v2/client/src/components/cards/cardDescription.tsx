interface CardDescriptionProps {
  description: string
}

export function CardDescription({
  description
}: CardDescriptionProps): JSX.Element {
  return <p className='text-xs font-light'>{description}</p>
}
