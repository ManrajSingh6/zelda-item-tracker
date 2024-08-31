interface BadgeProps {
  readonly text: string
}

export function Badge({ text }: BadgeProps): JSX.Element {
  return (
    <span className='me-2 rounded-lg bg-accentIndigo px-2.5 py-0.5 text-[10px] font-light text-white'>
      {text}
    </span>
  )
}
