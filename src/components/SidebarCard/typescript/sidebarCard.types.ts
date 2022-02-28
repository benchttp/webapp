import { MouseEventHandler } from 'react'

import { IStandardProps } from 'shared/helpers/types'

export type IProps = ISidebarCard

interface ISidebarCard extends IStandardProps {
  active: boolean
  onClick: MouseEventHandler
}
