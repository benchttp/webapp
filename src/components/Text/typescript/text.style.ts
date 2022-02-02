import styled from 'styled-components'
import { IProps } from './text.types'
import {
  COLORS,
  FONT_SIZES,
  FONT_FAMILIES,
  FONT_WEIGHTS,
} from '../../../shared/style/constants'

export const StyledText = styled('p')<IProps>`
  ${({ color }) => color && `color: ${COLORS[color]};`}
  ${({ size }) => size && `font-size: ${FONT_SIZES[size]};`}
  ${({ font }) => font && `font-family: ${FONT_FAMILIES[font]};`}
  ${({ weight }) => weight && `font-weight: ${FONT_WEIGHTS[weight]};`}
`
