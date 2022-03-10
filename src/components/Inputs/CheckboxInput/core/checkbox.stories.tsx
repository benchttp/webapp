import { ComponentMeta, ComponentStory } from '@storybook/react'

import { hideControl } from 'shared/helpers/storybook'
import { useState } from 'react'
import { CheckboxInput } from '..'

export default {
  title: 'Atoms/CheckboxInput',
  component: CheckboxInput,
  args: {
    name: 'checkbox-input',
    label: 'Checkbox Input',
  },
  argTypes: {
    id: hideControl,
    className: hideControl,
    name: hideControl,
  },
} as ComponentMeta<typeof CheckboxInput>

const Template: ComponentStory<typeof CheckboxInput> = (args) => {
  const [checked, setChecked] = useState(true)

  return (
    <div className="f">
      <CheckboxInput {...args} checked={checked} setChecked={setChecked} />
    </div>
  )
}

export const Main = Template.bind({})
