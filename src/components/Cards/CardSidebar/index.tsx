import { FC } from 'react'

import { Text } from 'components'
import { FontFamilies, FontSizes } from 'shared/style/constants'

import { StyledCardSidebar } from './core/cardSidebar.style'
import { IProps } from './core/cardSidebar.types'

export const CardSidebar: FC<IProps> = (props) => {
  const { children } = props

  return (
    <StyledCardSidebar {...props} className="pt-2 pb-2 pl-3 pr-3">
      <Text className="m-0" font={FontFamilies.INTER} size={FontSizes.BASE}>
        {children}
      </Text>
    </StyledCardSidebar>
  )
}
