import { FC } from 'react'

import { Text, CardConfig } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'

export const Index: FC = () => {
  return (
    <MainLayout>
      <Text className="mb-4" font={FontFamilies.POPPINS} size={FontSizes.LARGE}>
        Config
      </Text>
      <CardConfig />
    </MainLayout>
  )
}
