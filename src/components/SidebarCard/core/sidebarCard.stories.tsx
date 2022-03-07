import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { SidebarCard } from 'components'
import { hideControl } from 'shared/helpers/storybook'

export default {
  title: 'Atoms/SidebarCard',
  component: SidebarCard,
  argTypes: {
    onClick: hideControl,
    className: hideControl,
    id: hideControl,
  },
} as ComponentMeta<typeof SidebarCard>

const Template: ComponentStory<typeof SidebarCard> = (args) => (
  <SidebarCard {...args}>Auth0</SidebarCard>
)

export const Default = Template.bind({})
Default.args = {
  active: false,
}

export const Active = Template.bind({})
Active.args = {
  active: true,
}
