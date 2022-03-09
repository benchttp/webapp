import { Text } from 'components/Text'
import { FC } from 'react'

import { IProps } from './core/cardConfigContent.types'
import { StyledCardConfigContent } from './core/cardConfigContent.styles'
import { FontFamilies, FontSizes, FontWeights } from 'shared/style/constants'

export const CardConfigContent: FC<IProps> = (props) => {
  const { className } = props
  return (
    <StyledCardConfigContent className={className || ''}>
      <div className="f mb-3">
        <div className="mr-7">
          <Text
            font={FontFamilies.POPPINS}
            weight={FontWeights.BOLD}
            size={FontSizes.LARGE}
          >
            1
          </Text>
          <Text weight={FontWeights.MEDIUM}>Concurrency</Text>
        </div>
        <div className="mr-8">
          <Text
            font={FontFamilies.POPPINS}
            weight={FontWeights.BOLD}
            size={FontSizes.LARGE}
          >
            50ms
          </Text>
          <Text>Interval</Text>
        </div>
        <div className="cardConfigContentHeadersContainer">
          <Text
            font={FontFamilies.POPPINS}
            weight={FontWeights.BOLD}
            size={FontSizes.LARGE}
          >
            Headers
          </Text>
          <div className="f pl-6 pr-6 f-jc-space-a">
            <Text>key0</Text>
            <Text>val0, val1</Text>
          </div>
        </div>
      </div>
    </StyledCardConfigContent>
  )
}
