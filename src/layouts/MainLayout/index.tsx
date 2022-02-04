import { FC } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { StyledMainLayout } from './typescript/mainLayout.styles'

const MainLayout: FC = ({ children }) => {
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

export default MainLayout
