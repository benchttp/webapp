import styled from 'styled-components'

import { Colors, COLORS } from 'shared/style/constants'

import { IProps } from './card.types'

export const StyledCard = styled('div')<IProps>`
  ${({ background }) =>
    `background: ${background ? COLORS[background] : COLORS[Colors.GREY1]};`}
`
