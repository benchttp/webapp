import { ExpansionPanel } from 'components/ExpansionPanel'
import { FC } from 'react'
import { CardRequestHeader } from './subcomponent/CardRequestHeader'
import { IProps } from './core/cardRequest.types'
import { Card } from 'components/Card'

import { CardRequestContent } from './subcomponent/CardRequestContent'

export const CardRequest: FC<IProps> = (props) => {
  return (
    <Card className="mt-4">
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardRequestHeader {...props} />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardRequestContent data={props.chartData} />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
