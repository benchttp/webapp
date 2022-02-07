import { FC } from 'react'

import { StyledText } from './typescript/text.style'
import { IProps } from './typescript/text.types'

const Text: FC<IProps> = (props) => {
  const { children } = props

  return <StyledText {...props}>{children}</StyledText>
}

export default Text
