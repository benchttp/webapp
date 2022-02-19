import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import TextInput from '..'
import { hideControl } from '../../../../shared/helpers/storybook'
import { Icons } from '../../../../shared/icons'
import { Colors } from '../../../../shared/style/constants'

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
  icon: Icons.search,
  iconPosition: 'left',
  iconColor: Colors.GREY2,
}
