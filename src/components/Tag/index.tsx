import { FC } from 'react'

import { StyledTag } from './core/tag.styles'
import { IProps } from './core/tag.types'

export const Tag: FC<IProps> = (props) => {
  const { children, className } = props

  return (
    <StyledTag
      {...props}
      className={`br-1 pt-1 pb-1 pr-2 pl-2 ${className || ''}`}
    >
      {children}
    </StyledTag>
  )
}
