import { IHeaderValue } from 'components/Inputs/HeaderInput/core/headerInput.types'
import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  headerIndex: number
  index: number
  values: IHeaderValue[]
  setValues: Dispatch<SetStateAction<IHeaderValue[]>>
}

export type IHook = (params: {
  index: IProps['index']
  values: IProps['values']
  setValues: IProps['setValues']
  value: string
}) => void
