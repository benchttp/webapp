import { Dispatch, SetStateAction } from 'react'

import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  name: string
  label: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}
