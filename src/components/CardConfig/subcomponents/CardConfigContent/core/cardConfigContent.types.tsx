import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  className?: string

  concurrency: number

  interval: string
}
