import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardResult } from 'components'
import { IconTime } from 'shared/icons/IconTime'

export default {
  title: 'Atoms/CardResult',
  component: CardResult,
  args: {
    icon: <IconTime />,
    unit: 'ms',
    number: 500,
    text: <div>of request were successfull</div>,
  },
} as ComponentMeta<typeof CardResult>

const Template: ComponentStory<typeof CardResult> = (args) => (
  <CardResult {...args} />
)

export const Main = Template.bind({})

export const WithOptions = Template.bind({})
WithOptions.args = {
  optionsData: [
    {
      label: '90%',
      value: 300,
    },
    {
      label: '80%',
      value: 200,
    },
    {
      label: '70%',
      value: 300,
    },
    {
      label: '60%',
      value: 300,
    },
    {
      label: '50%',
      value: 300,
    },
    {
      label: '40%',
      value: 300,
    },
  ],
}
