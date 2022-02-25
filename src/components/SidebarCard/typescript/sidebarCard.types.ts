import { IStandardProps } from '../../../shared/helpers/types'

export type IProps = ISidebarCard

interface ISidebarCard extends IStandardProps {
  active: boolean
  onClick: (id?: string) => void
}
