import { FC } from 'react'

import { StyledPrimaryButton } from './core/primaryButton.styles'
import { IProps } from './core/primaryButton.types'

export const PrimaryButton: FC<IProps> = (props) => {
  const { children, className } = props

  return (
    <StyledPrimaryButton className={`${className || ''}`}>
      {children}
    </StyledPrimaryButton>
  )
}
