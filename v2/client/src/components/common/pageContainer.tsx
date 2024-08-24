export interface PageContainerProps {
  readonly children: React.ReactNode
}

export function PageContainer({ children }: PageContainerProps): JSX.Element {
  return <div className='h-screen p-2'>{children}</div>
}
