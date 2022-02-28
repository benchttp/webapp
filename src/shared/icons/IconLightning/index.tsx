import { FC } from 'react'

import { ISVGProps } from 'shared/helpers/types'
import { COLORS } from 'shared/style/constants'

export const IconLightning: FC<ISVGProps> = ({
  color,
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={`${className || ''}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS[color]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  )
}
