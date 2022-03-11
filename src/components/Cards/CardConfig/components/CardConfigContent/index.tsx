import { FC } from 'react'
import { Text } from 'components/Text'

import { StyledCardConfigContent } from './core/cardConfigContent.styles'
import { FontFamilies, FontSizes, FontWeights } from 'shared/style/constants'

import { useGetReportsByIdQuery } from 'shared/store/apis'
import { useAppSelector } from 'shared/store'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { getHeadersArray } from './core/cardConfigContent.helpers'

export const CardConfigContent: FC = () => {
  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)
  const { data: report } = useGetReportsByIdQuery(selectedRunId ?? skipToken)

  const headersArray = getHeadersArray(report)

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
        {headersArray && headersArray.length !== 0 ? (
          <table className="f f-jc-space-a headersListContainer">
            <thead>
              <tr className="f keyValueCouple">
                <th className="keyColumn">Key</th>
                <th className="valueColumn">Value</th>
              </tr>
            </thead>
            <tbody>
              {headersArray.map(([key, value], index) => {
                return (
                  <tr key={index} className="f keyValueCouple">
                    <td className="keyColumn">
                      <Text>{key}</Text>
                    </td>
                    <td className="valueColumn">
                      <Text>{value.join()}</Text>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <Text>There are no headers.</Text>
        )}
      </div>
    </StyledCardConfigContent>
  )
}
