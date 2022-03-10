import { FC } from 'react'

import { Avatar } from 'components'
import { ButtonAppearence, Colors } from 'shared/style/constants'

import { StyledHeader } from './core/header.styles'
import { IProps } from './core/header.types'
import { StyledButton } from 'components/Button/core/Button.styles'
import { Logo } from 'components/Logo'

export const Header: FC<IProps> = (props) => {
  const { className } = props

  return (
    <StyledHeader
      {...props}
      className={`${
        className || ''
      } pt-3 pb-3 pl-4 pr-4 f f-ai-center f-jc-space-b`}
    >
      <Logo />
      <div className="f">
        <StyledButton
          className="mr-4"
          appearance={ButtonAppearence.PRIMARY}
          mainColor={Colors.PRIMARY}
          secondaryColor={Colors.WHITE}
          active={true}
          hover={true}
        >
          Generate config
        </StyledButton>
        <Avatar username="John Doe" />
      </div>
    </StyledHeader>
  )
}
