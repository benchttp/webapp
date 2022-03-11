import { MouseEventHandler } from 'react'

import { IStandardProps } from 'shared/types/common'

import { ExpansionPanelContent } from '../composition/ExpansionPanelContent'
import { ExpansionPanelHeader } from '../composition/ExpansionPanelHeader'

export interface IProps extends IStandardProps {}

export interface IContext {
  isOpen: boolean
  toggle: MouseEventHandler
}

export interface IComposition {
  Header: typeof ExpansionPanelHeader
  Content: typeof ExpansionPanelContent
}
