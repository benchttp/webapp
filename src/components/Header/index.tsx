import { FC } from 'react'

import { Text, Avatar } from 'components'
import { BENCHTTP } from 'shared/helpers/constants'
import { IconLightning } from 'shared/icons/IconLightning'
import { Colors, FontFamilies, FontWeights } from 'shared/style/constants'

import { StyledHeader } from './core/sidebar.styles'
import { IProps } from './core/sidebar.types'
import { PrimaryButton } from 'components/PrimaryButton'

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
      <div className="f">
        <a href="#">
          <PrimaryButton className="mr-4">Generate config</PrimaryButton>
        </a>
        <Avatar username="John Doe" />
      </div>
    </StyledHeader>
  )
}
