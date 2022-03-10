import styled from 'styled-components'
import {
  BORDER_RADIUS,
  ButtonAppearance,
  COLORS,
  SPACINGS,
} from 'shared/style/constants'
import { IProps } from './Button.types'

export const StyledButton = styled('button')<IProps>`
  ${({ appearance, mainColor, secondaryColor, hover, active }) =>
    `padding: ${SPACINGS[2]};
    cursor: pointer;
    border-radius: ${BORDER_RADIUS[1]};
    transition: color 150ms, background-color 150ms, transform 100ms;
    font-family: 'poppins';
    font-weight: 700;

    ${
      appearance === ButtonAppearance.PRIMARY
        ? `background-color: ${COLORS[mainColor]};
        border: 1px solid ${COLORS[mainColor]};
        color: ${COLORS[secondaryColor]};
        ${
          hover &&
          `
            &:hover {
              background-color: ${COLORS.TRANSPARENT};
              color: ${COLORS[mainColor]};
              border: 1px solid ${COLORS[mainColor]};
          `
        }`
        : `
        background-color: ${COLORS.TRANSPARENT};
        border: 1px solid ${COLORS[mainColor]};
        color: ${COLORS[mainColor]};
        ${
          hover &&
          `
            &:hover {
              background-color: ${COLORS[mainColor]};
              color: ${COLORS[secondaryColor]};
              border: 1px solid ${COLORS[mainColor]};
          `
        }
        `
    }

    ${
      active &&
      `
      &:active {
        transform: scale(0.95);
      }
      `
    }
`}
`
