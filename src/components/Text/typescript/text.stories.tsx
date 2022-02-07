import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Text from '..'
import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from '../../../shared/style/constants'

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children: 'Greg made a wooden quantic cpu',
    font: FontFamilies.INTER,
    size: FontSizes.BASE,
    weight: FontWeights.MEDIUM,
    color: Colors.WHITE,
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Main = Template.bind({})

export const MainSmall = Template.bind({})
MainSmall.args = {
  size: FontSizes.SMALL,
}

export const Highlight = Template.bind({})
Highlight.args = {
  font: FontFamilies.POPPINS,
  weight: FontWeights.BOLD,
}

export const HighlightLarge = Template.bind({})
HighlightLarge.args = {
  font: FontFamilies.POPPINS,
  weight: FontWeights.BOLD,
  size: FontSizes.LARGE,
}
