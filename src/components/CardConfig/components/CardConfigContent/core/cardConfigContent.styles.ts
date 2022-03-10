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
    max-width: 100%;
    overflow-x: auto;
  }

  tr {
    border-bottom: 1px solid ${COLORS.grey4};
    border-left: 1px solid ${COLORS.grey4};
    border-right: 1px solid ${COLORS.grey4};
  }

  thead {
    border-top: 1px solid ${COLORS.grey4};
  }

  keyValueCouple {
    border-top: none;
  }

  .keyColumn {
    width: 30%;
    padding: ${SPACINGS[1]};
    border-right: 1px solid ${COLORS.grey4};
  }

  .valueColumn {
    width: 60%;
    padding: ${SPACINGS[1]};
  }
`
