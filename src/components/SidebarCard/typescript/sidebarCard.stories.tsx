import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { SidebarCard } from '..'

export default {
  title: 'Atoms/SidebarCard',
  component: SidebarCard,
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
