import { LoadSpinner } from './loadSpinner'

interface GridProps {
  readonly elements: readonly JSX.Element[]
  readonly elementsLoading?: boolean
}

export function Grid({ elements, elementsLoading }: GridProps): JSX.Element {
  return (
    <div
      className={`h-full w-full ${
        elementsLoading ? 'flex items-center justify-center' : ''
      }`}
    >
      {elementsLoading ? (
        <LoadSpinner isBlocking={elementsLoading} />
      ) : (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5'>
          {elements}
        </div>
      )}
    </div>
  )
}
