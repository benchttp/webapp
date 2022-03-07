import { FC } from 'react'

import { ISVGProps } from 'shared/helpers/types'
import { COLORS } from 'shared/style/constants'

export const IconDownload: FC<ISVGProps> = ({
  color,
  height = 24,
  width = 24,
  className,
  onClick,
}) => {
  return (
    <svg
      className={className || ''}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS[color]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}
