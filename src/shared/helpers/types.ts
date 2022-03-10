import { MouseEventHandler } from 'react'

import { Colors } from 'shared/style/constants'

export interface IStandardProps {
  className?: string
  id?: string
}

export interface ISVGProps extends IStandardProps {
  color?: Colors
  width?: number
  height?: number
  onClick?: MouseEventHandler
}
