import { Button } from 'components/Button'
import { Logo } from 'components/Logo'
import { FC } from 'react'
import { ButtonAppearence, Colors } from 'shared/style/constants'

import { StyledCardLogin } from './core/login.styles'
import { IProps } from './core/login.types'
import { GitHub } from 'react-feather'

export const CardLogin: FC<IProps> = (props) => {
  const redirectToGithub = () => {
    const searchParams = new URLSearchParams()
    const clientId = process.env.REACT_APP_CLIENT_ID_GITHUB as string
    searchParams.append('client_id', clientId)

    window.location.href = `https://github.com/login/oauth/authorize?${searchParams.toString()}`
  }

  return (
    <StyledCardLogin {...props}>
      <div className="card">
        <Logo />
        <Button
          className="github-btn"
          appearance={ButtonAppearence.PRIMARY}
          mainColor={Colors.PRIMARY}
          secondaryColor={Colors.WHITE}
          active={true}
          hover={true}
          onClick={() => redirectToGithub()}
        >
          <GitHub size={18} /> Login with Github
        </Button>
      </div>
    </StyledCardLogin>
  )
}
