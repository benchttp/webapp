import { IStandardProps } from 'shared/types'

export interface IProps extends IStandardProps {
  data: { name: string; time: number }[]
}
