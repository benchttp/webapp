import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LineChart } from 'components'

export default {
  title: 'Atoms/Charts/Line',
  component: LineChart,
} as ComponentMeta<typeof LineChart>

const Template: ComponentStory<typeof LineChart> = (args) => {
  return <LineChart {...args} />
}

export const Main = Template.bind({})
Main.args = {
  legendY: 'time/per',
  data: [
    {
      id: 'request',
      data: [
        {
          x: 0,
          y: 214,
        },
        {
          x: 1,
          y: 167,
        },
        {
          x: 2,
          y: 224,
        },
        {
          x: 3,
          y: 264,
        },
        {
          x: 4,
          y: 131,
        },
        {
          x: 5,
          y: 111,
        },
        {
          x: 6,
          y: 60,
        },
        {
          x: 7,
          y: 287,
        },
        {
          x: 8,
          y: 183,
        },
        {
          x: 9,
          y: 62,
        },
        {
          x: 10,
          y: 239,
        },
        {
          x: 11,
          y: 297,
        },
        {
          x: 12,
          y: 214,
        },
        {
          x: 13,
          y: 167,
        },
        {
          x: 14,
          y: 224,
        },
        {
          x: 15,
          y: 264,
        },
      ],
    },
  ],
}
