import { FC } from 'react'

import { Header, Sidebar } from 'components'

import { StyledMainLayout } from './core/mainLayout.styles'
import { IProps } from './core/mainLayout.types'

export const MainLayout: FC<IProps> = (props) => {
  const { children, hideSidebar } = props

  return (
    <StyledMainLayout {...props} className="f f-direction-column">
      <Header />
      {hideSidebar ? (
        <div className="content p-4">{children}</div>
      ) : (
        <div className="main f f-jc-space-b">
          <Sidebar />
          <div className="content p-4">{children}</div>
        </div>
      )}
    </StyledMainLayout>
  )
}
