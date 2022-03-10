import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  name: string
  label?: string
  placeholder?: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
