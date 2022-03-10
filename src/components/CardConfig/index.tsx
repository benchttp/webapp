import { FC } from 'react'

import { Card, ExpansionPanel } from 'components'

import { CardConfigContent } from './components/CardConfigContent'
import { CardConfigHeader } from './components/CardConfigHeader'

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
