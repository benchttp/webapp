import { MouseEventHandler } from 'react'

import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  active: boolean
  onClick: MouseEventHandler
}
