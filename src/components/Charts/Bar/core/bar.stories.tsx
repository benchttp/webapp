import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ChartBar } from 'components'

export default {
  title: 'Atoms/Charts/Bar',
  component: ChartBar,
} as ComponentMeta<typeof ChartBar>

const Template: ComponentStory<typeof ChartBar> = (args) => {
  return <ChartBar {...args} />
}

export const Main = Template.bind({})
Main.args = {
  data: [
    {
      name: 'DNSDone',
      time: 2100730,
    },
    {
      name: 'ConnectDone',
      time: 7683944,
    },
    {
      name: 'TLSHandshakeDone',
      time: 21375560,
    },
    {
      name: 'WroteHeaders',
      time: 21737202,
    },
    {
      name: 'WroteRequest',
      time: 21753265,
    },
    {
      name: 'GotFirstResponseByte',
      time: 44387450,
    },
    {
      name: 'BodyRead',
      time: 44496009,
    },
  ],
}
