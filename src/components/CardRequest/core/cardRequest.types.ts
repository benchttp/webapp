import { IStandardProps } from 'shared/types'

export interface IProps extends IStandardProps {
  index: number
  responseCode: number
  responseTime: number
  responseSize: number
  chartData: { name: string; time: number }[]
}
