import { Setup } from 'pages/Setup'
import { Index } from '../pages/Index'
import { IRoute } from './routes.types'

export const ROUTES: IRoute[] = [
  {
    key: 'index',
    path: '/',
    page: Index,
  },
  {
    key: 'setup',
    path: '/setup',
    page: Setup,
  },
]
