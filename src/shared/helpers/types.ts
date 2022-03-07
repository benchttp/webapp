import { Colors } from 'shared/style/constants'

export interface IStandardProps {
  className?: string
  id?: string
}

export type CustomFunction<Params, Return> = (params: Params) => Return

export interface ISVGProps extends IStandardProps {
  color?: Colors
  width?: number
  height?: number
}
