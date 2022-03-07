import { FC } from 'react'

import { getInitials } from 'shared/helpers/utils'

import { StyledAvatar } from './core/avatar.styles'
import { IProps } from './core/avatar.types'

export const Avatar: FC<IProps> = (props) => {
  const { username } = props

  return (
    <StyledAvatar {...props} className="f f-center">
      <p>{getInitials(username)}</p>
    </StyledAvatar>
  )
}
