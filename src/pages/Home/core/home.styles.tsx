import styled from 'styled-components'

import { SPACINGS } from 'shared/style/constants'

export const StyledHome = styled('div')`
  .chart {
    flex: 1 0 auto;
  }
  .stats {
    flex: 0 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${SPACINGS[2]};
  }
`
