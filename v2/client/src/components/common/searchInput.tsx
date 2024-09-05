import { CiSearch } from 'react-icons/ci'
import { Icon } from './icon'

interface TextInputProps {
  readonly label?: string
  readonly placeholder?: string
  readonly value: string
  readonly onChange: (value: string) => void
}

export function TextInput({
  label,
  placeholder = 'Search',
  value,
  onChange
}: TextInputProps): JSX.Element {
  function onTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label className='text-xs font-semibold text-accent'>{label}</label>
      )}
      <div className='flex flex-row items-center gap-2 rounded-md border bg-gray-50 p-2'>
        <Icon
          icon={<CiSearch />}
          styles={{
            color: '#334151',
            width: '1.2rem'
          }}
        />
        {/* TODO: extract the input into seperate component */}
        <input
          type='text'
          value={value}
          onChange={onTextChange}
          placeholder={placeholder}
          className='w-full bg-inherit text-sm focus:outline-none'
        />
      </div>
    </div>
  )
}
