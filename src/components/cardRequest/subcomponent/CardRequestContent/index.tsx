import { FC } from 'react'

import { Text } from 'components'
import {
  FontFamilies,
  FontSizes,
  Colors,
  FontWeights,
} from 'shared/style/constants'
import { StyledCardRequestContent } from '../../core/cardRequest.styles'
import { ResponsiveBar } from '@nivo/bar'
import { IProps } from './core/cardRequestContent.types'

export const CardRequestContent: FC<IProps> = (props) => {
  const Tooltip = ({
    event,
  }: {
    event: { value: string | number; id: string | number }
  }) => (
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
    <StyledCardRequestContent style={{ height: 200 }}>
      <ResponsiveBar
        data={[props.data]}
        theme={{ textColor: '#fff' }}
        keys={[
          'DNSDone',
          'ConnectDone',
          'TLSHandshakeDone',
          'WroteRequest',
          'GotFirstResponseByte',
          'BodyRead',
        ]}
        indexBy="country"
        labelSkipWidth={25}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
          legend: 'Step request',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
      />
    </StyledCardRequestContent>
  )
}
