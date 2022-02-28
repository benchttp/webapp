import { FC } from 'react'

import { StyledHeader } from './typescript/sidebar.styles'
import { IProps } from './typescript/sidebar.types'

export const Header: FC<IProps> = (props) => {
  const { className } = props

  return (
    <StyledHeader className={`${className || ''} pt-3 pb-3 pl-4 pr-4`}>
      <p>header</p>
    </StyledHeader>
  )
}
