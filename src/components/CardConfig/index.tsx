import { FC } from 'react'

import { Card, ExpansionPanel } from 'components'

import { CardConfigContent } from './subcomponents/CardConfigContent'
import { CardConfigHeader } from './subcomponents/CardConfigHeader'

export const CardConfig: FC = () => {
  return (
    <Card>
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardConfigHeader />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardConfigContent className="mt-3" />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
