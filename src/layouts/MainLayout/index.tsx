import { FC } from 'react'

import { Header, Sidebar } from '../../components'
import { StyledMainLayout } from './typescript/mainLayout.styles'

export const MainLayout: FC = ({ children }) => {
  return (
    <StyledMainLayout className="f f-direction-column">
      <Header />
      <div className="main f f-jc-space-b">
        <Sidebar />
        <div className="content p-4">{children}</div>
      </div>
    </StyledMainLayout>
  )
}
