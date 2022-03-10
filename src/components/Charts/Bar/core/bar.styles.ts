import styled from 'styled-components'

import { IProps } from './bar.types'

export const StyledLineChart = styled['div']<IProps>`
  height: 200px;
  .tooltip {
    background: #fff;
    padding: 10px 20px;
    color: #000;
    border-radius: 10px;
  }
`
