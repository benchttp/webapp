import styled from 'styled-components'

import {
  Colors,
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
} from 'shared/style/constants'

import { IProps } from './tag.types'

export const StyledTag = styled('div')<IProps>`
  ${({ background }) =>
    `background: ${background ? COLORS[background] : COLORS[Colors.WHITE]};`}
  ${({ color }) => `color: ${color ? COLORS[color] : COLORS[Colors.BLACK]};`}
  font-family: ${FONT_FAMILIES['poppins']};
  font-weight: ${FONT_WEIGHTS['bold']};
`
