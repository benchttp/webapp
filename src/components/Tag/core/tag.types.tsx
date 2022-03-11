import { Colors } from 'shared/style/constants'
import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {
  background?: Colors
  color?: Colors
}
