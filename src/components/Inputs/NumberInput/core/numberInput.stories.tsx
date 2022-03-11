import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TextInput } from 'components'
import { hideStorybookControl } from 'shared/helpers/utils'
import { Colors, Icons } from 'shared/style/constants'
import { useState } from 'react'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Greg',
    name: 'textInput',
  },
  argTypes: {
    id: hideStorybookControl,
    className: hideStorybookControl,
    name: hideStorybookControl,
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [test, setTest] = useState('')

  return <TextInput {...args} value={test} setValue={setTest} />
}

export const Main = Template.bind({})

export const SearchInput = Template.bind({})
SearchInput.args = {
  placeholder: 'Search ...',
  name: 'search',
  icon: Icons.SEARCH,
  iconPosition: 'left',
  iconColor: Colors.WHITE,
}
