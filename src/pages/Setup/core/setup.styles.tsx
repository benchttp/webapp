import { COLORS, SPACINGS } from 'shared/style/constants'
import styled from 'styled-components'

export const StyledSetup = styled('div')`
  .config,
  .result {
    flex: 1;
  }

  .url,
  .requests,
  .concurrency,
  .interval,
  .global-timeout,
  .request-timeout {
    flex: 1;
  }

  .method {
    flex: 0;
  }

  .code {
    background: ${COLORS.black};
    position: relative;
  }

  .icons {
    position: absolute;
    top: ${SPACINGS[3]};
    right: ${SPACINGS[3]};
  }
`
