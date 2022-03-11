/* eslint-disable @typescript-eslint/no-explicit-any */

import { IStandardProps } from 'shared/types/common'

export type IProps = IGenericProps

interface IGenericProps extends IStandardProps {
  data: any
  legendX?: string
  legendY: string
}
