import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CardSidebar } from 'components'
import { hideStorybookControl } from 'shared/helpers/utils'

export default {
  title: 'Atoms/CardSidebar',
  component: CardSidebar,
  argTypes: {
    onClick: hideStorybookControl,
    className: hideStorybookControl,
    id: hideStorybookControl,
  },
} as ComponentMeta<typeof CardSidebar>

const Template: ComponentStory<typeof CardSidebar> = (args) => (
  <CardSidebar {...args}>Auth0</CardSidebar>
)

export const Default = Template.bind({})
Default.args = {
  active: false,
}

export const Active = Template.bind({})
Active.args = {
  active: true,
}
