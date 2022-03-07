import { FC } from 'react'

import { StyledText } from './core/text.style'
import { IProps } from './core/text.types'

export const Text: FC<IProps> = (props) => {
  const { children } = props

  return <StyledText {...props}>{children}</StyledText>
}
