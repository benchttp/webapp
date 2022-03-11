import styled from 'styled-components'

import { COLORS, FONT_SIZES } from 'shared/style/constants'

export const StyledTextAreaInput = styled('div')`
  .input {
    textarea {
      flex: 1;
      font-size: ${FONT_SIZES['base']};
      background: ${COLORS.white};
      appearance: none;
      outline: none;
      border: 1px solid ${COLORS['grey2']};
    }
  }
`
