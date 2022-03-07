import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from 'components'
import { hideControl } from 'shared/helpers/storybook'
import { Colors } from 'shared/style/constants'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  args: {
    children: 'Tag content',
    background: Colors.WHITE,
  },
  argTypes: {
    className: hideControl,
    id: hideControl,
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Main = Template.bind({})
