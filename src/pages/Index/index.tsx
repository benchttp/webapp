import { FC } from 'react'

import { Dropdown, Text, CardConfig } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'

export const Index: FC = () => {
  return (
    <>
      <Dropdown className="mb-4" />
      <Text className="mb-4" font={FontFamilies.POPPINS} size={FontSizes.LARGE}>
        Config
      </Text>
      <CardConfig />
    </>
  )
}
