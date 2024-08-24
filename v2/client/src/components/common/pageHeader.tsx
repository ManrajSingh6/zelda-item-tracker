interface PageHeaderProps {
  readonly header: string
  readonly subText: string
}

export function PageHeader({ header, subText }: PageHeaderProps): JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-semibold text-heading'>{header}</h1>
      <p className='text-sm font-light text-accent'>{subText}</p>
    </div>
  )
}
