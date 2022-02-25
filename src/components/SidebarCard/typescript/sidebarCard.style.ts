import styled from 'styled-components'

import { COLORS, BORDER_RADIUS } from '../../../shared/style/constants'
import { IProps } from './sidebarCard.types'

export const StyledSidebarCard = styled('div')<IProps>`
  border-radius: ${BORDER_RADIUS[1]};
  cursor: pointer;
  color: ${COLORS.white};
  background: ${({ active }) =>
    active ? `${COLORS['primary']}` : 'transparent'};
`
