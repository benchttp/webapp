import { FC } from 'react'
import { IProps } from './core/line.types'
import { StyledLineChart } from './core/line.styles'
import { ResponsiveLine, SliceTooltipProps } from '@nivo/line'
import { Text } from 'components/Text'
import {
  Colors,
  COLORS,
  FontFamilies,
  FontSizes,
  FontWeights,
} from 'shared/style/constants'

export const LineChart: FC<IProps> = (props) => {
  const { data, legendX, legendY } = props

  const Tooltip = ({ event }: { event: SliceTooltipProps }) => (
    <div className="tooltip">
      <Text
        font={FontFamilies.INTER}
        size={FontSizes.SMALL}
        weight={FontWeights.MEDIUM}
      >
        Request n°{event.slice.points[0].data.x}
      </Text>
      <div className="flex">
        <Text
          font={FontFamilies.INTER}
          size={FontSizes.SMALL}
          weight={FontWeights.MEDIUM}
        >
          Request time:{' '}
        </Text>
        <Text
          color={Colors.PRIMARY}
          font={FontFamilies.INTER}
          size={FontSizes.SMALL}
          weight={FontWeights.MEDIUM}
        >
          {event.slice.points[0].data.y} ms
        </Text>
      </div>
    </div>
  )

  return (
    <StyledLineChart {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        curve="monotoneX"
        theme={{ textColor: '#fff' }}
        enablePoints={false}
        axisTop={null}
        axisRight={null}
        enableGridX={false}
        enableSlices="x"
        lineWidth={3}
        colors={COLORS.primary}
        sliceTooltip={(e) => <Tooltip event={e} />}
        useMesh={true}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: legendX,
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: legendY,
          legendOffset: -40,
          legendPosition: 'middle',
        }}
      />
    </StyledLineChart>
  )
}
