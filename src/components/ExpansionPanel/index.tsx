import { FC, useState } from 'react'

import { ExpansionPanelContent } from './composition/ExpansionPanelContent'
import { ExpansionPanelHeader } from './composition/ExpansionPanelHeader'
import { Context } from './core/expansionPanel.context'
import { toggle } from './core/expansionPanel.helpers'
import { IComposition, IContext, IProps } from './core/expansionPanel.types'

export { Context as ExpansionPanelContext } from './core/expansionPanel.context'

export const ExpansionPanel: FC<IProps> & IComposition = (props) => {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  const context: IContext = {
    isOpen,
    toggle: toggle(isOpen, setIsOpen),
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

ExpansionPanel.Header = ExpansionPanelHeader
ExpansionPanel.Content = ExpansionPanelContent
