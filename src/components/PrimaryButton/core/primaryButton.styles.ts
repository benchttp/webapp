import styled from 'styled-components'
import { BORDER_RADIUS, COLORS, SPACINGS } from 'shared/style/constants'

export const StyledPrimaryButton = styled('button')`
  padding: ${SPACINGS[2]};
  background-color: transparent;
  color: ${COLORS.primary};
  border-radius: ${BORDER_RADIUS[1]};
  cursor: pointer;
  border: 1px solid ${COLORS.primary};
  transition: color 150ms, background-color 150ms, transform 100ms;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  &:active {
    transform: scale(0.95);
  }
`
