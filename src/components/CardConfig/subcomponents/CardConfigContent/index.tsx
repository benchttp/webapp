import { FC } from 'react'

import { IProps } from './core/cardConfigContent.types'

export const CardConfigContent: FC<IProps> = (props) => {
  const { className } = props
  return (
    <div className={className || ''}>
      <p>test</p>
    </div>
  )
}
