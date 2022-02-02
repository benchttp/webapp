import { FC } from 'react'
import Text from '../../components/Text'
import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from '../../shared/style/constants'

const Index: FC = () => {
  return (
    <Text
      color={Colors.PRIMARY}
      font={FontFamilies.POPPINS}
      size={FontSizes.LARGE}
      weight={FontWeights.BOLD}
    >
      Test
    </Text>
  )
}

export default Index
