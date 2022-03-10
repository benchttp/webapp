import { ExpansionPanel } from 'components/ExpansionPanel'
import { FC } from 'react'
import { CardRequestHeader } from './subcomponent/CardRequestHeader'
import { IProps } from './core/cardRequest.types'
import { Card } from 'components/Card'

import { CardRequestContent } from './subcomponent/CardRequestContent'

export const CardRequest: FC<IProps> = (props) => {
  const data = [
    {
      name: 'DNSDone',
      time: 2100730,
    },
    {
      name: 'ConnectDone',
      time: 7683944,
    },
    {
      name: 'TLSHandshakeDone',
      time: 21375560,
    },
    {
      name: 'WroteHeaders',
      time: 21737202,
    },
    {
      name: 'WroteRequest',
      time: 21753265,
    },
    {
      name: 'GotFirstResponseByte',
      time: 44387450,
    },
    {
      name: 'BodyRead',
      time: 44496009,
    },
  ]

  const convertInMs = (time: number) => {
    return parseInt((time / 1000).toFixed(0))
  }

  const computeData = () => {
    const barChartData: Record<string, number> = {}
    for (let i = 0; i <= data.length; i++) {
      barChartData[data[i].name] =
        i === 0
          ? convertInMs(data[i].time)
          : convertInMs(data[i].time - data[i - 1].time)
    }
    return barChartData
  }

  return (
    <Card>
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardRequestHeader {...props} />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardRequestContent data={computeData()} />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
