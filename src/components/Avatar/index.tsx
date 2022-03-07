import { FC } from 'react'

import { getInitials } from 'shared/helpers/utils'

import { StyledAvatar } from './typescript/avatar.styles'
import { IProps } from './typescript/avatar.types'

export const Avatar: FC<IProps> = ({ username }) => {
  return (
    <StyledAvatar className="f f-center">
      <p>{getInitials(username)}</p>
    </StyledAvatar>
  )
}
