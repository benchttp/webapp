import { FC } from 'react'
import { ButtonAppearence, Colors } from 'shared/style/constants'

import { StyledButton } from './core/Button.styles'
import { IProps } from './core/Button.types'

export const Button: FC<IProps> = ({
  children,
  className = '',
  appearence = ButtonAppearence.PRIMARY,
  onClick,
  mainColor = Colors.PRIMARY,
  secondaryColor = Colors.WHITE,
  hover = true,
  active = true,
}) => (
  <StyledButton
    className={className}
    appearance={appearence}
    onClick={onClick}
    mainColor={mainColor}
    secondaryColor={secondaryColor}
    hover={hover}
    active={active}
  >
    {children}
  </StyledButton>
)
