import { IHeader } from 'pages/Setup/core/setup.types'
import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  index: number
  headers: IHeader[]
  setHeaders: Dispatch<SetStateAction<IHeader[]>>
}

export interface IHeaderValue {
  uuid: string
  value: string
}

export type IHook = (params: {
  headers: IProps['headers']
  setHeaders: IProps['setHeaders']
  key: string
  index: IProps['index']
  values: IHeaderValue[]
}) => void
