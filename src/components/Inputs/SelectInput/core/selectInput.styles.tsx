import {
  FONT_SIZES,
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  SPACINGS,
} from 'shared/style/constants'
import styled from 'styled-components'
import { IProps } from './selectInput.types'

export const StyledSelectInput = styled('div')<IProps>`
  .input {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -${SPACINGS[2]};
      left: 0;
      height: 1px;
      width: 100%;
      background: ${COLORS['grey2']};
    }

    select {
      font-size: ${FONT_SIZES['base']};
      color: ${COLORS['white']};
      font-family: ${FONT_FAMILIES['inter']};
      font-weight: ${FONT_WEIGHTS['semi']};
      background: none;
      border: none;
      flex: 1 0 auto;
      outline: none;
      appearance: none;
      padding: 0 ${SPACINGS[4]} 0 0;

      option {
        background: ${COLORS.black};
        color: ${COLORS.white};
      }
    }

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 0;
      pointer-events: none;
    }
  }
`
