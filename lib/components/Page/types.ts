export type PageWrapperWithTitleProps = {
  children: React.JSX.Element
  title: string
  [key: string]: any
}

export type PageWrapperWithContainerProps = PageWrapperWithTitleProps & {
  icon: string
  onFilterClick: (...args: any[]) => void
  pageActions: React.JSX.Element
  legend: string
  subtitle: string
  enableGoBack: boolean
}
