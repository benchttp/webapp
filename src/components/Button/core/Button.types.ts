import { ButtonAppearence, Colors } from 'shared/style/constants'
import { IStandardProps } from '../../../shared/helpers/types'

export type IProps = IPrimaryButtonProps | IOutlineButtonProps

interface IGenericProps extends IStandardProps {
  appearence?: ButtonAppearence
  mainColor: Colors
  secondaryColor: Colors
  hover: boolean
  active: boolean
  onClick?: () => void
}

interface IPrimaryButtonProps extends IGenericProps {
  appearance: ButtonAppearence.PRIMARY
}

interface IOutlineButtonProps extends IGenericProps {
  appearance: ButtonAppearence.OUTLINE
}
