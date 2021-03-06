import styled from 'styled-components'

import { StyledHeader } from 'components/Header/core/header.styles'
import { StyledSidebar } from 'components/Sidebar/core/sidebar.styles'

export const StyledMainLayout = styled('div')`
  height: 100vh;
  overflow: hidden;

  ${StyledHeader} {
    flex: 0 0 auto;
  }

  .main {
    flex: 1 0 0;
    overflow: hidden;
  }

  ${StyledSidebar} {
    width: 250px;
    flex: 0 0 0;
  }

  .content {
    flex: 1 1 auto;
    overflow-y: scroll;
  }
`
