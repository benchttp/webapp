import { FC } from 'react'

import { Header, Sidebar } from 'components'

import { StyledMainLayout } from './core/mainLayout.styles'

export const MainLayout: FC = (props) => {
  const { children } = props

  return (
    <StyledMainLayout {...props} className="f f-direction-column">
      <Header />
      <div className="main f f-jc-space-b">
        <Sidebar tests={[{ name: 'Auth0' }, { name: 'JWT' }]} />
        <div className="content p-4">{children}</div>
      </div>
    </StyledMainLayout>
  )
}
