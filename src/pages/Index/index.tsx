import { FC } from 'react'

import { Text, CardConfig, CardRequest } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'
import { MainLayout } from 'layouts/MainLayout'

export const Index: FC = () => {
  return (
    <MainLayout>
      <Text className="mb-4" font={FontFamilies.POPPINS} size={FontSizes.LARGE}>
        Config
      </Text>
      <CardConfig />
      <CardRequest
        index={0}
        responseCode={200}
        responseSize={123}
        responseTime={10}
      />
      <CardRequest
        index={1}
        responseCode={500}
        responseSize={23040}
        responseTime={1120}
      />
    </MainLayout>
  )
}
