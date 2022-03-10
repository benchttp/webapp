import { FC } from 'react'

import { Text, Avatar, Button } from 'components'
import { BENCHTTP } from 'shared/helpers/constants'
import {
  ButtonAppearence,
  COLORS,
  Colors,
  FontFamilies,
  FontWeights,
} from 'shared/style/constants'

import { StyledHeader } from './core/header.styles'
import { IProps } from './core/header.types'
import { Zap } from 'react-feather'

export const Header: FC<IProps> = (props) => {
  const { className } = props

  return (
    <StyledHeader
      {...props}
      className={`${
        className || ''
      } pt-3 pb-3 pl-4 pr-4 f f-ai-center f-jc-space-b`}
    >
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
      <div className="f">
        <Button
          className="mr-4"
          appearance={ButtonAppearence.PRIMARY}
          mainColor={Colors.PRIMARY}
          secondaryColor={Colors.WHITE}
          active={true}
          hover={true}
        >
          Generate config
        </Button>
        <Avatar username="John Doe" />
      </div>
    </StyledHeader>
  )
}
