import styled from 'styled-components'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACINGS,
} from 'shared/style/constants'

import { IProps } from './numberInput.types'

export const StyledTextInput = styled('div')<IProps>`
  .input {
    position: relative;
    ${({ iconPosition, icon }) =>
      icon &&
      (iconPosition && iconPosition === 'right'
        ? `padding-right: ${SPACINGS[5]};`
        : `padding-left: ${SPACINGS[5]};`)}

    &::before {
      content: '';
      position: absolute;
      bottom: -${SPACINGS[2]};
      left: 0;
      height: 1px;
      width: 100%;
      background: ${COLORS['grey2']};
    }

    input {
      font-size: ${FONT_SIZES['base']};
      font-family: ${FONT_FAMILIES['inter']};
      color: ${COLORS['white']};
      font-weight: ${FONT_WEIGHTS['semi']};
      position: relative;
      background: none;
      border: none;
      flex: 1 0 auto;
      outline: none;
      padding: 0;

      &:placeholder {
        background: ${COLORS['grey2']};
      }
    }

    .icon {
      ${({ icon }) => !icon && 'display: none;'}
      position: absolute;
      ${({ iconPosition }) =>
        iconPosition && iconPosition === 'right' ? 'right: 0;' : 'left: 0;'}
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
`
