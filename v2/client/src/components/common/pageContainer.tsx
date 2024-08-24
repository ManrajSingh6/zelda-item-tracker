export interface PageContainerProps {
  readonly children: React.ReactNode
}

export function PageContainer({ children }: PageContainerProps): JSX.Element {
  return <div>{children}</div>
}
