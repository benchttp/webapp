import styled from 'styled-components'

import { COLORS, BORDER_RADIUS } from 'shared/style/constants'

export const StyledCardLogin = styled['div']`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    background: ${COLORS.grey1};
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20%;
    border-radius: ${BORDER_RADIUS[1]};
  }

  .github-btn {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      margin-right: 5px;
    }
  }
`
