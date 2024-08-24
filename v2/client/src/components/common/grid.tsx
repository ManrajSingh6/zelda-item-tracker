interface GridProps {
  readonly elements: readonly JSX.Element[]
}

export function Grid({ elements }: GridProps): JSX.Element {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
      {elements}
    </div>
  )
}
