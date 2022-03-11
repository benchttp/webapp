import styled from 'styled-components'

import {
  BORDER_RADIUS,
  FONT_SIZES,
  FontSizes,
  COLORS,
  SPACINGS,
} from 'shared/style/constants'

import { IProps } from './cardResult.types'

export const StyledCardResult = styled('div')<IProps>`
  .card {
    position: relative;
  }

  .icon {
    flex: 0 0 auto;
    background: ${({ iconColor }) => COLORS[iconColor]}50;
    border-radius: 100px;
  }

  .text {
    flex: 1 0 auto;
  }

  .overlay {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .content-dropdown {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .dropdown {
    position: absolute;
    right: 30px;
    top: -20px;
    background-color: #565a67;
    max-height: 280px;
    overflow-y: auto;
    width: 100px;
    border-radius: ${BORDER_RADIUS[1]};
    color: #fffbff;
    margin-top: ${SPACINGS[3]};
    box-shadow: 0 ${SPACINGS[1]} ${SPACINGS[5]} ${COLORS.black};
    z-index: 2;

    .dropdown-item {
      padding: ${SPACINGS[3]} ${SPACINGS[2]};
      border-bottom: 1px solid #40434e;
      font-size: ${FONT_SIZES[FontSizes.SMALL]};
    }
    .dropdown-item:hover {
      background-color: #6f7585;
      cursor: pointer;
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
`
