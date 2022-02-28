import { FC } from 'react'

import { StyledText } from './typescript/text.style'
import { IProps } from './typescript/text.types'

export const Text: FC<IProps> = (props) => {
  const { children } = props

  return <StyledText {...props}>{children}</StyledText>
}
