import Select from 'react-select'

export interface DropdownOption {
  readonly label: string
  readonly value: string | number
  readonly disabled?: boolean
}

interface DropdownProps {
  readonly selectedOption: DropdownOption | null
  readonly options: readonly DropdownOption[]
  readonly defaultOption?: DropdownOption
  readonly onSelect: (value: DropdownOption | null) => void
  readonly dropdownLabel?: string
  readonly placeholder?: string
}

export function Dropdown({
  selectedOption,
  options,
  defaultOption,
  onSelect,
  dropdownLabel,
  placeholder
}: DropdownProps): JSX.Element {
  return (
    <div className='flex flex-col gap-1'>
      {/* TODO: extract this into a seperate component, and use it in the search + text input as well */}
      {dropdownLabel && (
        <label className='text-xs font-semibold text-accent'>
          {dropdownLabel}
        </label>
      )}
      <Select
        className='w-fit text-sm focus:outline-none'
        defaultValue={defaultOption}
        onChange={onSelect}
        value={selectedOption}
        options={defaultOption ? [defaultOption].concat(options) : options}
        placeholder={placeholder}
      />
    </div>
  )
}
