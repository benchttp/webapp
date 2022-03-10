import { IQueryParam } from 'pages/Setup/core/setup.types'
import { Dispatch, SetStateAction } from 'react'
import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  index: number
  queryParams: IQueryParam[]
  setQueryParams: Dispatch<SetStateAction<IQueryParam[]>>
}

export type IHook = (params: {
  queryParams: IProps['queryParams']
  setQueryParams: IProps['setQueryParams']
  key: string
  value: string
  index: IProps['index']
}) => void
