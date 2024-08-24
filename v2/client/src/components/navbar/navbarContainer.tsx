export interface NavbarContainerProps {
  readonly children: React.ReactNode
}

export function NavbarContainer({
  children
}: NavbarContainerProps): JSX.Element {
  return <div className='p-2'>{children}</div>
}
