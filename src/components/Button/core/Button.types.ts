import { MouseEventHandler } from 'react'
import { ButtonAppearance, Colors } from 'shared/style/constants'
import { IStandardProps } from '../../../shared/helpers/types'

export type IProps = IPrimaryButtonProps | IOutlineButtonProps

interface IGenericProps extends IStandardProps {
  appearence?: ButtonAppearance
  mainColor: Colors
  secondaryColor: Colors
  hover: boolean
  active: boolean
  onClick?: MouseEventHandler
}

interface IPrimaryButtonProps extends IGenericProps {
  appearance: ButtonAppearance.PRIMARY
}

interface IOutlineButtonProps extends IGenericProps {
  appearance: ButtonAppearance.OUTLINE
}
