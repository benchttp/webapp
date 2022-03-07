import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from 'components'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    username: 'Greg Doe',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />
}

export const Main = Template.bind({})
