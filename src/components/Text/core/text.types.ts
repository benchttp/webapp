import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from 'shared/style/constants'
import { IStandardProps } from 'shared/types/common'

export type IProps = IPoppinsProps | IInterProps

interface IGenericProps extends IStandardProps {
  color?: Colors
}

interface IPoppinsProps extends IGenericProps {
  font: FontFamilies.POPPINS
  size?: FontSizes.LARGE | FontSizes.BASE | FontSizes.MEDIUM
  weight?: FontWeights.BOLD
}

interface IInterProps extends IGenericProps {
  font?: FontFamilies.INTER
  size?: FontSizes.SMALL | FontSizes.BASE | FontSizes.MEDIUM
  weight?: FontWeights.MEDIUM | FontWeights.SEMI
}
