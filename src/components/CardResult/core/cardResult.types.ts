import { ReactNode } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  number: number
  icon: ReactNode
  colorIcon: string
  unit: 'ms' | '%'
  text: ReactNode
  optionsData?: Option[]
  onChangeOption?: (value: number) => void
}

type Option = {
  label: ReactNode
  value: number
}

export interface IPropsStyle {
  colorIcon: IProps['colorIcon']
}
