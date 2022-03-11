import { FC } from 'react'

import { ButtonAppearance, Colors } from 'shared/style/constants'

import { StyledButton } from './core/Button.styles'
import { IProps } from './core/Button.types'

export const Button: FC<IProps> = ({
  children,
  className = '',
  appearance = ButtonAppearance.PRIMARY,
  onClick,
  mainColor = Colors.PRIMARY,
  secondaryColor = Colors.WHITE,
  hover = true,
  active = true,
}) => (
  <StyledButton
    className={className}
    appearance={appearance}
    onClick={onClick}
    mainColor={mainColor}
    secondaryColor={secondaryColor}
    hover={hover}
    active={active}
  >
    {children}
  </StyledButton>
)
