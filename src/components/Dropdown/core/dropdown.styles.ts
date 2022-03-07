import styled from 'styled-components'

import {
  BORDER_RADIUS,
  COLORS,
  FontSizes,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACINGS,
} from '../../../shared/style/constants'

export const StyledDropdown = styled['div']`
  .storybook-dropdown {
    font-size: ${FONT_SIZES[FontSizes.BASE]};
    font-family: ${FONT_FAMILIES.inter};
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    background-color: transparent;
    color: ${COLORS.primary};
    padding: ${SPACINGS[1]};
  }

  p {
    font-family: ${FONT_FAMILIES.inter};
  }

  .storybook-dropdown:hover {
    text-decoration: underline;
  }

  .dropdown-menu {
    position: absolute;
    background-color: #565a67;
    height: auto;
    max-height: 280px;
    overflow-y: auto;
    min-width: 260px;
    width: fit-content;
    border-radius: ${BORDER_RADIUS[1]};
    color: #fffbff;
    margin-top: ${SPACINGS[3]};
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    pointer-events: none;
    box-shadow: 0 ${SPACINGS[1]} ${SPACINGS[5]} ${COLORS.black};

    .dropdown-item {
      padding: ${SPACINGS[3]} ${SPACINGS[2]};
      border-bottom: 1px solid #40434e;
      font-size: ${FONT_SIZES[FontSizes.SMALL]};
    }

    .dropdown-item:hover {
      background-color: #6f7585;
      border-radius: ${BORDER_RADIUS[1]};
      cursor: pointer;
    }

    .dropdown-item:last-child {
      border-bottom: none;
    }
  }

  .display-dropdown {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
`
