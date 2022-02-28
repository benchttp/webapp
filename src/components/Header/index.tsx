import { FC } from 'react'

import { Text, Avatar } from 'components'
import { IconLightning } from 'shared/icons/IconLightning'
import { Colors, FontFamilies, FontWeights } from 'shared/style/constants'

import { BENCHTTP } from './typescript/sidebar.constants'
import { StyledHeader } from './typescript/sidebar.styles'
import { IProps } from './typescript/sidebar.types'

export const Header: FC<IProps> = (props) => {
  const { className } = props

  return (
    <StyledHeader
      className={`${
        className || ''
      } pt-3 pb-3 pl-4 pr-4 f f-ai-center f-jc-space-b`}
    >
      <div className="f f-center">
        <IconLightning
          height={40}
          width={40}
          color={Colors.PRIMARY}
          className="mr-1"
        />
        <Text
          color={Colors.PRIMARY}
          weight={FontWeights.BOLD}
          font={FontFamilies.POPPINS}
        >
          {BENCHTTP}
        </Text>
      </div>
      <Avatar username="John Doe" />
    </StyledHeader>
  )
}
