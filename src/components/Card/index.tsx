import { FC } from 'react'

import { StyledCard } from './core/card.styles'
import { IProps } from './core/card.types'

export const Card: FC<IProps> = ({ children, className }) => {
  return (
    <StyledCard className={`br-1 p-3 ${className || ''}`}>
      {children}
    </StyledCard>
  )
}
