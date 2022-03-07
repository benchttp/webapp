import styled from 'styled-components'

import { COLORS, SHADOWS, Z_INDEXS } from 'shared/style/constants'

export const StyledHeader = styled('div')`
  z-index: ${Z_INDEXS['header']};
  background: ${COLORS['grey1']};
  box-shadow: ${SHADOWS[0]};
`
