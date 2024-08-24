import { IconContext } from 'react-icons'

interface IconProps {
  readonly icon: JSX.Element
  readonly styles?: {
    readonly height?: string
    readonly width?: string
    readonly color?: string
  }
}

export function Icon({ icon, styles }: IconProps): JSX.Element {
  return (
    <IconContext.Provider
      value={{
        color: styles?.color,
        size: styles?.height || styles?.width || '30px'
      }}
    >
      <div>{icon}</div>
    </IconContext.Provider>
  )
}
