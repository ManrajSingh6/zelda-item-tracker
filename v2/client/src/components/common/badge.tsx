interface BadgeContainerProps {
  readonly badges: readonly string[]
  readonly header?: string
  readonly badgeStyle?: {
    readonly backgroundColor: string
    readonly textColor: string
  }
}

interface BadgeProps {
  readonly text: string
  readonly badgeStyle?: {
    readonly backgroundColor: string
    readonly textColor: string
  }
}

function Badge({ text, badgeStyle }: BadgeProps): JSX.Element {
  return (
    <span
      className='rounded-lg px-2.5 py-0.5 text-[10px] font-light capitalize'
      style={{
        backgroundColor: badgeStyle?.backgroundColor,
        color: badgeStyle?.textColor
      }}
    >
      {text}
    </span>
  )
}

export function BadgeContainer({
  badges,
  header,
  badgeStyle
}: BadgeContainerProps): JSX.Element {
  return (
    <div>
      <span className='text-xs font-semibold text-accent'>{header}</span>
      <div className='flex flex-wrap gap-1'>
        {badges.map((badge, idx) => {
          return (
            <Badge
              key={`badge-item-${badge}-${idx}`}
              text={badge}
              badgeStyle={badgeStyle}
            />
          )
        })}
      </div>
    </div>
  )
}
