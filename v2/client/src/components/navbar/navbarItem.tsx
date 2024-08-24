import { Link } from 'react-router-dom'

export interface NavbarItemProps {
  readonly text: string
  readonly route: string
  readonly isActiveRoute: boolean
}

export function NavbarItem({
  text,
  route,
  isActiveRoute
}: NavbarItemProps): JSX.Element {
  return (
    <Link to={route}>
      <p
        className={`text-sm font-semibold hover:text-accentIndigo transition-colors duration-200 ease-in-out ${
          isActiveRoute ? 'text-accentIndigo' : 'text-darkGray'
        }`}
      >
        {text}
      </p>
    </Link>
  )
}
