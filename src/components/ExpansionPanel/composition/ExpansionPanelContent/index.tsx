import { FC, useContext } from 'react'

import { ExpansionPanelContext } from 'components/ExpansionPanel'

export const ExpansionPanelContent: FC = (props) => {
  const { children } = props
  const expansionPanelContext = useContext(ExpansionPanelContext)
  const { isOpen } = { ...expansionPanelContext }

  return isOpen ? <>{children}</> : null
}
