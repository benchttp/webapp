import { FC } from 'react'

import { Dropdown, Text, CardConfig, CardRequest } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'

export const Index: FC = () => {
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
