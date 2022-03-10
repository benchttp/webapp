import { Login } from 'pages/Login'
import { Index } from 'pages/Index'
import { OauthGithub } from 'pages/OauthGithub'
import { IRoute } from './routes.types'

export const ROUTES: IRoute[] = [
  {
    key: 'index',
    path: '/',
    page: Index,
  },
  {
    key: 'login',
    path: '/login',
    page: Login,
  },
  {
    key: 'githubOauth',
    path: '/oauth/github',
    page: OauthGithub,
  },
]
