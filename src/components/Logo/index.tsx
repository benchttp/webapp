import { FC } from 'react'

import { Text } from 'components'
import { BENCHTTP } from 'shared/helpers/constants'
import {
  COLORS,
  Colors,
  FontFamilies,
  FontWeights,
} from 'shared/style/constants'
import { Zap } from 'react-feather'

export const Logo: FC = () => {
  return (
    <div className="f f-center">
      <Zap className="mr-1" color={COLORS[Colors.PRIMARY]} size={40} />

      <Text
        color={Colors.PRIMARY}
        weight={FontWeights.BOLD}
        font={FontFamilies.POPPINS}
      >
        {BENCHTTP}
      </Text>
    </div>
  )
}
