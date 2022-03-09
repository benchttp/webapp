import { FC } from 'react'
import { ButtonAppearence } from 'shared/style/constants'

import { StyledButton } from './core/Button.styles'
import { IProps } from './core/Button.types'

export const PrimaryButton: FC<IProps> = ({
  children,
  className = '',
  appearence = ButtonAppearence.PRIMARY,
}) => (
  <StyledButton className={className} appearance={appearence}>
    {children}
  </StyledButton>
)
