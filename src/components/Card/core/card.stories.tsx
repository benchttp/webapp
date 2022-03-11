import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from 'components'
import { hideStorybookControl } from 'shared/helpers/utils'

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Card content',
  },
  argTypes: {
    id: hideStorybookControl,
    className: hideStorybookControl,
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Main = Template.bind({})
