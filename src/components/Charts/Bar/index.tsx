import { FC } from 'react'
import { IProps, ITooltipProps } from './core/bar.types'
import { StyledLineChart } from './core/bar.styles'
import { ResponsiveBar } from '@nivo/bar'
import { Text } from 'components'
import { convertInMs } from 'shared/helpers/utils'
import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from 'shared/style/constants'

export const ChartBar: FC<IProps> = (props) => {
  const { data } = props

  const computeData = () => {
    const barChartData: Record<string, number> = {}
    for (let i = 0; i <= data.length - 1; i++) {
      barChartData[data[i].name] =
        i === 0
          ? convertInMs(data[i].time)
          : convertInMs(data[i].time - data[i - 1].time)
    }
    return barChartData
  }

  const Tooltip = ({ event }: ITooltipProps) => (
    <div className="tooltip">
      <Text
        font={FontFamilies.INTER}
        size={FontSizes.SMALL}
        weight={FontWeights.MEDIUM}
      >
        {event.id}
      </Text>
      <div className="flex">
        <Text
          color={Colors.PRIMARY}
          font={FontFamilies.INTER}
          size={FontSizes.SMALL}
          weight={FontWeights.MEDIUM}
        >
          {event.value} ms
        </Text>
      </div>
    </div>
  )

  return (
    <StyledLineChart {...props}>
      <ResponsiveBar
        data={[computeData()]}
        theme={{ textColor: '#fff' }}
        keys={[
          'DNSDone',
          'ConnectDone',
          'TLSHandshakeDone',
          'WroteRequest',
          'GotFirstResponseByte',
          'BodyRead',
        ]}
        labelSkipWidth={25}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        tooltip={(e) => <Tooltip event={e} />}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ms',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Event request',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 6,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </StyledLineChart>
  )
}
