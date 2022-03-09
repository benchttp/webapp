import { BORDER_RADIUS, COLORS, SPACINGS } from 'shared/style/constants'
import styled from 'styled-components'

export const StyledCardConfigContent = styled('div')`
  background-color: ${COLORS.black};
  padding: ${SPACINGS[3]};
  border-radius: ${BORDER_RADIUS[1]};

  .cardConfigContentHeadersContainer {
    width: 100%;
  }

  .headersListContainer {
    flex-wrap: wrap;
    flex-direction: column;
    border-collapse: collapse;
  }

  tr {
    border-top: 1px solid #6a6a6a;
    border-left: none;
    border-right: none;
  }

  tr:last-child {
    border-bottom: 1px solid #6a6a6a;
  }

  keyValueCouple {
    border-top: none;
  }

  .keyColumn {
    width: 30%;
    padding: ${SPACINGS[1]};
    border-right: 1px solid #6a6a6a;
  }

  .valueColumn {
    width: 60%;
    padding: ${SPACINGS[1]};
  }
`
