interface CardTitleProps {
  readonly title: string
}

export function CardTitle({ title }: CardTitleProps): JSX.Element {
  return <p className='text-sm font-semibold capitalize'>{title}</p>
}
