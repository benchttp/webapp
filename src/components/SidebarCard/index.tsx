import { FC } from 'react'

import { Text } from 'components/Text'
import { FontFamilies, FontSizes } from 'shared/style/constants'

import { StyledSidebarCard } from './typescript/sidebarCard.style'
import { IProps } from './typescript/sidebarCard.types'

export const SidebarCard: FC<IProps> = (props) => {
  const { children, active, onClick } = props

  return (
    <StyledSidebarCard
      className="pt-2 pb-2 pl-3 pr-3"
      active={active}
      onClick={onClick}
    >
      <Text className="m-0" font={FontFamilies.INTER} size={FontSizes.BASE}>
        {children}
      </Text>
    </StyledSidebarCard>
  )
}
