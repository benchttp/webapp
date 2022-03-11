import styled from 'styled-components'

import { COLORS, SPACINGS } from 'shared/style/constants'

export const StyledCheckbox = styled('div')`
  .input {
    position: relative;

    input {
      appearance: none;
      height: ${SPACINGS[3]};
      width: ${SPACINGS[3]};
      background: ${COLORS.grey3};
      border-radius: 4px;

      &:checked {
        & ~ .icon {
          opacity: 1;
        }
      }
    }

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      opacity: 0;
      transition: opacity 0.1s ease-out;
    }
  }
`
