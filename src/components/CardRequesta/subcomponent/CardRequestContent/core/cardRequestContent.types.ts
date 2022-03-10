import { IStandardProps } from 'shared/helpers/types'

export interface IProps extends IStandardProps {
  data: { name: string; time: number }[]
}
