import { FC } from 'react'

import { StyledCard } from './core/card.styles'
import { IProps } from './core/card.types'

export const Card: FC<IProps> = (props) => {
  const { children, className } = props

  return (
    <StyledCard {...props} className={`br-1 p-3 ${className || ''}`}>
      {children}
    </StyledCard>
  )
}
