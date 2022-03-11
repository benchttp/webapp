import { Dispatch, SetStateAction } from 'react'

import { Colors, Icons } from 'shared/style/constants'
import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  name: string
  label?: string
  placeholder?: string
  icon?: Icons
  iconPosition?: 'left' | 'right'
  iconColor?: Colors
  value: string
  setValue: Dispatch<SetStateAction<string>>
  min?: number
  max?: number
}
