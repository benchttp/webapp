/* eslint-disable @typescript-eslint/no-explicit-any */
import { Serie } from '@nivo/line'
import { IStandardProps } from 'shared/types/common'

export type IProps = IGenericProps

interface IGenericProps extends IStandardProps {
  data: Serie[]
  legendX?: string
  legendY: string
}
