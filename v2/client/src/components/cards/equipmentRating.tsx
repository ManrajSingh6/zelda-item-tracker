import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'
import { Icon } from '../common/icon'

interface EquipmentRatingProps {
  readonly attackRating: number | undefined
  readonly defenseRating: number | undefined
}

export function EquipmentRating({
  attackRating,
  defenseRating
}: EquipmentRatingProps): JSX.Element {
  return (
    <div className='mt-2 flex items-center gap-5'>
      {attackRating !== undefined && (
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-1'>
            <Icon
              icon={<GiBroadsword />}
              styles={{
                color: '#6A287E',
                width: '1rem'
              }}
            />
            <p className='text-xs font-semibold text-accent'>Attack</p>
          </div>
          <p className='font-bold text-accent'>{attackRating}</p>
        </div>
      )}
      {defenseRating !== undefined && (
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-1'>
            <Icon
              icon={<GiCheckedShield />}
              styles={{
                color: '#6A287E',
                width: '1rem'
              }}
            />
            <p className='text-xs font-semibold text-accent'>Defense</p>
          </div>
          <p className='font-bold text-accent'>{defenseRating}</p>
        </div>
      )}
    </div>
  )
}
