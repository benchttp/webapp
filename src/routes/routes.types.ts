import { FC } from 'react'

export interface IRoute {
  key: React.Key
  path: string
  page: FC
}
