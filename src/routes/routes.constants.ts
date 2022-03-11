import { Index } from 'pages/Index'
import { Setup } from 'pages/Setup'
import { Home } from '../pages/Home'
import { IRoute } from './routes.types'

export const ROUTES: IRoute[] = [
  {
    key: 'home',
    path: '/',
    page: Home,
  },
  {
    key: 'index',
    path: '/abc',
    page: Index,
  },
  {
    key: 'setup',
    path: '/setup',
    page: Setup,
  },
]
