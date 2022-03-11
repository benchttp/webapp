/* eslint-disable @typescript-eslint/no-explicit-any */

import { IStandardProps } from 'shared/types'

export interface IProps extends IStandardProps {
  data: { name: string; time: number }[]
}

export interface ITooltipProps extends IStandardProps {
  event: { value: string | number; id: string | number }
}
