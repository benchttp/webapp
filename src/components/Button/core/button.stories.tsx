import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'components'
import { ButtonAppearance, Colors } from 'shared/style/constants'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    appearance: ButtonAppearance.PRIMARY,
    mainColor: Colors.PRIMARY,
    secondaryColor: Colors.WHITE,
    hover: true,
    active: true,
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Main = Template.bind({})
