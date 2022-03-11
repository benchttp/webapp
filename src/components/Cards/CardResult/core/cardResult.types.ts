import { ReactNode } from 'react'
import { Colors, Icons } from 'shared/style/constants'
import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  result: number
  icon: Icons
  iconColor: Colors
  unit: 'ms' | '%'
  text: string
  optionsData?: Option[]
  onChangeOption?: (value: number) => void
}

type Option = {
  label: ReactNode
  value: number
}
