import { FC } from 'react'

import { Card, ExpansionPanel } from 'components'

import { CardConfigContent } from './subcomponents/CardConfigContent'
import { CardConfigHeader } from './subcomponents/CardConfigHeader'

export const CardConfig: FC = () => {
  return (
    <Card>
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardConfigHeader className="mb-3" />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardConfigContent />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
