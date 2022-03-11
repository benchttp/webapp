import { IStandardProps } from 'shared/types/common'

export interface IProps extends IStandardProps {}

export type IHook = (params: { search: string }) => void
