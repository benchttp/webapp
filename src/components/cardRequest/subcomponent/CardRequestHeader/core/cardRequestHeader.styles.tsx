import styled from 'styled-components'

import {
  BORDER_RADIUS,
  COLORS,
  FontSizes,
  FontWeights,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACINGS,
} from 'shared/style/constants'

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: 0 0 100px;
  text-align: center;
  align-self: center;
`

export const StyledCardRequestHeader = styled['div']`
  .wrapper {
    background-color: #383b46;
    border-radius: ${BORDER_RADIUS[1]};
    padding: ${SPACINGS[3]};
    flex-direction: column;
  }
  .counter {
    font-weight: ${FONT_WEIGHTS[FontWeights.BOLD]};
  }
  .roundedColorResponse {
    border-radius: 50px;
    background: #73ad21;
    margin-top: 3px;
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }
  .responseCode {
    padding-left: 10px;
  }
  .rawResponseButton {
    font-size: ${FONT_SIZES[FontSizes.BASE]};
    font-family: ${FONT_FAMILIES.inter};
    cursor: pointer;
    background-color: transparent;
    color: ${COLORS.grey2};
    border: 1px solid ${COLORS.white};
    padding: ${SPACINGS[3]};
    width: 200px;
    border-radius: ${BORDER_RADIUS[1]};
    margin-right: 30px;
  }
  .rawResponseDiv {
    margin-left: auto;
  }
  .iconRow {
    padding-top: 5px;
  }
`
