import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SelectInput } from 'components'
import { hideStorybookControl } from 'shared/helpers/utils'
import { useState } from 'react'

export default {
  title: 'Atoms/SelectInput',
  component: SelectInput,
  args: {
    placeholder: 'Choose an option',
    name: 'textInput',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  argTypes: {
    id: hideStorybookControl,
    className: hideStorybookControl,
    name: hideStorybookControl,
  },
} as ComponentMeta<typeof SelectInput>

const Template: ComponentStory<typeof SelectInput> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <SelectInput
      {...args}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  )
}

export const Main = Template.bind({})
