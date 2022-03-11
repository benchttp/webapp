import { FC } from 'react'

import { ExpansionPanel, Card } from 'components'

import { IProps } from './core/cardRequest.types'
import { CardRequestContent } from './subcomponent/CardRequestContent'
import { CardRequestHeader } from './subcomponent/CardRequestHeader'

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

  return (
    <Card className="mt-4">
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardRequestHeader {...props} />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardRequestContent data={data} />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
