import { ClipLoader } from 'react-spinners'

interface LoadSpinnerProps {
  readonly isBlocking: boolean
}

export function LoadSpinner({ isBlocking }: LoadSpinnerProps): JSX.Element {
  return (
    <>{isBlocking && <ClipLoader loading={isBlocking} color='#0ea5e9' />}</>
  )
}
