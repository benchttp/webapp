import { FC } from 'react'

import { Dropdown, Text, CardConfig, CardRequest } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'

export const Index: FC = () => {
  const data = [
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
  ]
  return (
    <MainLayout>
      <Dropdown className="mb-4" />
      <Text className="mb-4" font={FontFamilies.POPPINS} size={FontSizes.LARGE}>
        Config
      </Text>
      <CardConfig />
      <CardRequest />
    </MainLayout>
  )
}
