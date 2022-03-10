import { FC } from 'react'

import { StyledCardRequestContent } from '../../core/cardRequest.styles'
import { IProps } from './core/cardRequestContent.types'
import { ChartBar } from 'components/Charts/Bar'

export const CardRequestContent: FC<IProps> = (props) => {
  return (
    <StyledCardRequestContent>
      <ChartBar data={props.data} />
    </StyledCardRequestContent>
  )
}
