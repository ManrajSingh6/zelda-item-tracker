import { GiSwordWound } from 'react-icons/gi'
import { Icon } from '../common/icon'
import { NavbarItem, NavbarItemProps } from './navbarItem'
import {
  CREATURES_ROUTE,
  EQUIPMENT_ROUTE,
  MATERIALS_ROUTE,
  MONSTERS_ROUTE,
  TREASURE_ROUTE
} from '../../utils/routes'
import { useLocation } from 'react-router-dom'

const NAVBAR_ITEMS: ReadonlyArray<Omit<NavbarItemProps, 'isActiveRoute'>> = [
  {
    text: 'Monsters',
    route: MONSTERS_ROUTE
  },
  {
    text: 'Equipment',
    route: EQUIPMENT_ROUTE
  },
  {
    text: 'Materials',
    route: MATERIALS_ROUTE
  },
  {
    text: 'Creatures',
    route: CREATURES_ROUTE
  },
  {
    text: 'Treasure',
    route: TREASURE_ROUTE
  }
]

export function Navbar(): JSX.Element {
  const { pathname } = useLocation()

  return (
    <div className='py-4 flex justify-between border-b-2 border-accentIndigo '>
      <div className='flex items-center gap-2'>
        <Icon
          icon={<GiSwordWound />}
          styles={{ color: '#6366f1', width: '2rem' }}
        />
        <h1 className='text-xl text-darkGray font-semibold'>
          Zelda Item Tracker
        </h1>
      </div>
      <ul className='flex flex-row items-center gap-6'>
        {NAVBAR_ITEMS.map(({ text, route }) => {
          return (
            <NavbarItem
              key={`nav-item-${text}`}
              text={text}
              route={route}
              isActiveRoute={pathname === route}
            />
          )
        })}
      </ul>
    </div>
  )
}
