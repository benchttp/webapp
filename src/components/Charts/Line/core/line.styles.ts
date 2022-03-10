import styled from 'styled-components'

import { IProps } from './line.types'

export const StyledLineChart = styled['div']<IProps>`
  width: 100%;
  height: 400px;

  .tooltip {
    background: #fff;
    padding: 10px 20px;
    color: #000;
    border-radius: 10px;
  }

  .flex {
    display: flex;
  }
  .flex > p:last-child {
    padding-left: 2px;
  }
`
