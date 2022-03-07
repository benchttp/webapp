import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { TextInput } from 'components'
import { hideControl } from 'shared/helpers/storybook'
import { Colors } from 'shared/style/constants'
import { Search } from 'react-feather'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Greg',
    submitOnChange: false,
    name: 'textInput',
  },
  argTypes: {
    id: hideControl,
    rules: hideControl,
    className: hideControl,
    shouldUnregister: hideControl,
    defaultValue: hideControl,
    control: hideControl,
    name: hideControl,
    onChange: hideControl,
  },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => {
  const { control } = useForm()

  return <TextInput control={control} {...args} />
}

export const Main = Template.bind({})

export const SearchInput = Template.bind({})
SearchInput.args = {
  placeholder: 'Search ...',
  submitOnChange: true,
  name: 'search',
  hasIcon: true,
  icon: Search,
  iconPosition: 'left',
  iconColor: Colors.GREY2,
}
