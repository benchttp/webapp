import { FC } from 'react'
import { IProps } from './core/line.types'
import { StyledLineChart } from './core/line.styles'
import { ResponsiveLine } from '@nivo/line'
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

  return (
    <StyledLineChart {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        sliceTooltip={(e) => (
          <div className="tooltip">
            <Text
              font={FontFamilies.INTER}
              size={FontSizes.SMALL}
              weight={FontWeights.MEDIUM}
            >
              Request n°{e.slice.points[0].data.x}
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
                {e.slice.points[0].data.y} ms
              </Text>
            </div>
          </div>
        )}
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
