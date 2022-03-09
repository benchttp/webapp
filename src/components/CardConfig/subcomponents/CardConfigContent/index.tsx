import { Text } from 'components/Text'
import { FC } from 'react'

import { IProps } from './core/cardConfigContent.types'
import { StyledCardConfigContent } from './core/cardConfigContent.styles'
import { FontFamilies, FontSizes, FontWeights } from 'shared/style/constants'

export const CardConfigContent: FC<IProps> = (props) => {
  const { className } = props

  const headerContent = Object.entries({
    key0: 'val0',
    key1: 'val1',
    key2: 'val2',
    key3: 'val3',
  })

  const headersList = headerContent.map(([key, value], index) => {
    return (
      <tr key={index} className="f keyValueCouple">
        <td className="keyColumn">
          <Text>{key}</Text>
        </td>
        <td className="valueColumn">
          <Text>{value}</Text>
        </td>
      </tr>
    )
  })

  return (
    <StyledCardConfigContent className={className || ''}>
      <Text
        font={FontFamilies.POPPINS}
        weight={FontWeights.BOLD}
        size={FontSizes.LARGE}
      >
        Options
      </Text>
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
      </div>
      <div className="cardConfigContentHeadersContainer">
        <Text
          font={FontFamilies.POPPINS}
          weight={FontWeights.BOLD}
          size={FontSizes.LARGE}
          className="mb-2"
        >
          Headers
        </Text>
        <table className="f pl-6 pr-6 f-jc-space-a headersListContainer">
          <thead>
            <tr className="f keyValueCouple">
              <th className="keyColumn">Key</th>
              <th className="valueColumn">Value</th>
            </tr>
          </thead>
          <tbody>{headersList}</tbody>
        </table>
      </div>
    </StyledCardConfigContent>
  )
}
