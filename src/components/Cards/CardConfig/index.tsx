import { FC } from 'react'

import { Card, ExpansionPanel } from 'components'

import { CardConfigContent } from './components/CardConfigContent'
import { CardConfigHeader } from './components/CardConfigHeader'
import { IProps } from './core/cardConfig.types'

export type { IProps as ICardConfigProps } from './core/cardConfig.types'

export const CardConfig: FC<IProps> = (props) => {
  const { className } = props

  return (
    <Card className={className || ''}>
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardConfigHeader />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <CardConfigContent />
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
