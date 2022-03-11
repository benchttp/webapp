import { SPACINGS } from 'shared/style/constants'
import styled from 'styled-components'

export const StyledHome = styled('div')`
  .chart {
    flex: 1 0 auto;
  }
  .space-between {
    display: flex;
    justify-content: space-between;
  }
  .stats {
    flex: 0 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${SPACINGS[2]};
  }
`
