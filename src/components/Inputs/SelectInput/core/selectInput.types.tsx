import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  name: string
  label?: string
  options: string[]
  placeholder?: string
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
}
