import styled from 'styled-components'

import { BORDER_RADIUS } from 'shared/style/constants'

type IProps = {
  backgroundStatus: string
}

export const StyledCardRequestHeader = styled['div']<IProps>`
  cursor: pointer;

  .roundedColorResponse {
    border-radius: ${BORDER_RADIUS[2]};
    background: ${({ backgroundStatus }) => backgroundStatus};
    width: 10px;
    height: 10px;
  }

  .column {
    width: 15%;
  }

  .grid {
    width: 60%;
  }
`
