import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  name: string
  label: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}
