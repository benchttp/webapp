import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from 'components'
import { hideControl } from 'shared/helpers/storybook'

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Card content',
  },
  argTypes: {
    id: hideControl,
    className: hideControl,
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Main = Template.bind({})
