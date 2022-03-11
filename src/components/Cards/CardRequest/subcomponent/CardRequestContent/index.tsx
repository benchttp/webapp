import { FC } from 'react'

import { ChartBar } from 'components'

import { StyledCardRequestContent } from '../../core/cardRequest.styles'
import { IProps } from './core/cardRequestContent.types'

export const CardRequestContent: FC<IProps> = (props) => {
  return (
    <StyledCardRequestContent>
      <ChartBar data={props.data} />
    </StyledCardRequestContent>
  )
}
