import { FC, useState } from 'react'

import {
  Text,
  CardConfig,
  Button,
  LineChart,
  Card,
  CardResult,
} from 'components'
import {
  Colors,
  ButtonAppearance,
  FontFamilies,
  FontSizes,
  Icons,
} from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'
import { useGetReportsByIdQuery, useGetStatByIdQuery } from 'shared/store/apis'
import { useAppSelector } from 'shared/store'
import { Loader } from 'react-feather'
import { convertInMs } from 'shared/helpers/utils'
import { useHome } from './core/home.hook'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { StyledHome } from './core/home.styles'

export const Home: FC = () => {
  const selectedRunId = useAppSelector((state) => state.general.selectedRunId)
  const [showCumulativeChart, setShowCumulativeChart] = useState(false)

  useHome({ selectedRunId })

  const { data: stat, isLoading: isStatLoading } = useGetStatByIdQuery(
    selectedRunId ?? skipToken
  )
  const { data: report, isLoading: isReportLoading } = useGetReportsByIdQuery(
    selectedRunId ?? skipToken
  )

  const graphData = report?.benchmark.records.map((event, i) => {
    return { x: i, y: convertInMs(event.time) }
  })

  const graphDataCumulative = report?.benchmark.records.map((event, i) => {
    if (i > 0) {
      let time = 0
      for (let j = 0; j <= i; j++) {
        time += report?.benchmark.records[j].time
      }
      return {
        x: i,
        y: convertInMs(time),
      }
    }
    return {
      x: i,
      y: convertInMs(event.time),
    }
  })

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
              <Card className="chart mr-2">
                <div className="space-between">
                  <Text
                    className="mb-4"
                    font={FontFamilies.POPPINS}
                    size={FontSizes.LARGE}
                  >
                    Graphs
                  </Text>
                  <Button
                    appearance={ButtonAppearance.OUTLINE}
                    mainColor={Colors.WHITE}
                    secondaryColor={Colors.BLACK}
                    hover={true}
                    active={true}
                    onClick={() =>
                      showCumulativeChart
                        ? setShowCumulativeChart(false)
                        : setShowCumulativeChart(true)
                    }
                  >
                    {showCumulativeChart
                      ? 'Show graph per request'
                      : 'Show cumulative graph per request'}
                  </Button>
                </div>
                {showCumulativeChart ? (
                  <LineChart
                    legendY="time/req"
                    data={[{ id: 'linear', data: graphData }]}
                  />
                ) : (
                  <LineChart
                    legendY="time/req"
                    data={[{ id: 'cumulative', data: graphDataCumulative }]}
                  />
                )}
              </Card>
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
