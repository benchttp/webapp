import { Setup, Home } from 'pages'

import { IRoute } from './routes.types'

export const ROUTES: IRoute[] = [
  {
    key: 'home',
    path: '/',
    page: Home,
  },
  {
    key: 'setup',
    path: '/setup',
    page: Setup,
  },
]
