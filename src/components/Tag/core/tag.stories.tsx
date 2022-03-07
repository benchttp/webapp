import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from 'components'
import { Colors } from 'shared/style/constants'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  args: {
    children: <p>Tag content</p>,
    background: Colors.WHITE,
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Main = Template.bind({})
