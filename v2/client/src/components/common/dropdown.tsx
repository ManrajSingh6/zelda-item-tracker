type DropdownOptionValue = string | number

interface DropdownOption {
  readonly label: string
  readonly value: DropdownOptionValue
  readonly disabled?: boolean
}

interface DropdownProps {
  readonly options: readonly DropdownOption[]
  readonly onSelect: (value: DropdownOptionValue) => void
  readonly dropdownLabel?: string
  readonly placeholder?: string
}

export function Dropdown({
  options,
  onSelect,
  dropdownLabel
}: DropdownProps): JSX.Element {
  function onDropdownChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    onSelect(event.target.value)
  }

  return (
    <div className='flex flex-col gap-1'>
      {/* TODO: extract this into a seperate component, and use it in the search + text input as well */}
      {dropdownLabel && (
        <label className='text-xs font-semibold text-accent'>
          {dropdownLabel}
        </label>
      )}
      <select
        onChange={onDropdownChange}
        className='w-full rounded-md border bg-gray-50 p-2 text-sm focus:outline-none'
      >
        {options.map(({ label, value, disabled }) => {
          return (
            <option
              value={value}
              className='bg-inherit text-inherit'
              disabled={disabled}
            >
              {label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
