import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from 'components'

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: <p>Card content</p>,
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Main = Template.bind({})
