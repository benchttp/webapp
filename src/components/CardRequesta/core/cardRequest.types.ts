import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  index: number
  responseCode: number
  responseTime: number
  responseSize: number
}
