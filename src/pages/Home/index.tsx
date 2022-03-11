import { FC } from 'react'

import { Text, CardConfig, Card, CardResult } from 'components'
import { Colors, FontFamilies, FontSizes, Icons } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'
import { useGetReportsByIdQuery, useGetStatByIdQuery } from 'shared/store/apis'
import { useAppSelector } from 'shared/store'
import { Loader } from 'react-feather'
import { convertInMs } from 'shared/utils/helpers'
import { useHome } from './core/home.hook'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { StyledHome } from './core/home.styles'

export const Home: FC = () => {
  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)

  useHome({ selectedRunId })

  const { data: stat, isLoading: isStatLoading } = useGetStatByIdQuery(
    selectedRunId ?? skipToken
  )
  const { data: report, isLoading: isReportLoading } = useGetReportsByIdQuery(
    selectedRunId ?? skipToken
  )

  return (
    <MainLayout>
      {/* <Dropdown className="mb-4" /> */}
      {isStatLoading || isReportLoading ? (
        <Loader />
      ) : (
        stat &&
        report && (
          <StyledHome>
            <Text
              className="mb-4"
              font={FontFamilies.POPPINS}
              size={FontSizes.LARGE}
            >
              Config
            </Text>
            <CardConfig className="mb-4" />
            <Text
              className="mb-4"
              font={FontFamilies.POPPINS}
              size={FontSizes.LARGE}
            >
              Results
            </Text>
            <div className="f f-jc-space-b mt-2">
              <Card className="chart mr-2">charts</Card>
              <div className="stats">
                <CardResult
                  icon={Icons.CLOCK}
                  iconColor={Colors.PRIMARY}
                  text="of requests are faster"
                  result={convertInMs(stat.time.deciles[0])}
                  unit="ms"
                />
                <CardResult
                  icon={Icons.AWARD}
                  iconColor={Colors.GREEN}
                  text="of requests were successfull"
                  result={
                    (stat.code.code2xx /
                      report.metadata.config.runner.requests) *
                    100
                  }
                  unit="%"
                />
                <CardResult
                  icon={Icons.TARGET}
                  iconColor={Colors.BLUE}
                  text="requests standard deviation"
                  result={convertInMs(stat.time.standardDeviation)}
                  unit="ms"
                />
                {/* <CardResult
                  icon={Icons.TARGET}
                  iconColor={Colors.BLUE}
                  text="requests variance"
                  result={stat.time.}
                  unit="ms"
                /> */}
                <CardResult
                  icon={Icons.CHART}
                  iconColor={Colors.WHITE}
                  text="requests average response"
                  result={convertInMs(stat.time.mean)}
                  unit="ms"
                />
                <CardResult
                  icon={Icons.CHART}
                  iconColor={Colors.WHITE}
                  text="requests median response"
                  result={convertInMs(stat.time.median)}
                  unit="ms"
                />
              </div>
            </div>
          </StyledHome>
        )
      )}
    </MainLayout>
  )
}
