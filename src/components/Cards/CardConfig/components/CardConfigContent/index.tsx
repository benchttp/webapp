import { Text } from 'components/Text'
import { FC } from 'react'

import { StyledCardConfigContent } from './core/cardConfigContent.styles'
import { FontFamilies, FontSizes, FontWeights } from 'shared/style/constants'

export const CardConfigContent: FC = () => {
  const headerContent = Object.entries({
    key0: 'value0',
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
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
    <StyledCardConfigContent className="mt-4 mr-2 ml-2 mb-2 p-3 br-1">
      <div className="cardConfigContentHeadersContainer">
        <Text
          font={FontFamilies.POPPINS}
          weight={FontWeights.BOLD}
          size={FontSizes.MEDIUM}
          className="mb-3"
        >
          Headers
        </Text>
        <table className="f f-jc-space-a headersListContainer">
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
