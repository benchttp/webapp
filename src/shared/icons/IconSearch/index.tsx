import { FC } from 'react'
import { ISVGProps } from 'shared/helpers/types'
import { COLORS } from 'shared/style/constants'

export const IconSearch: FC<ISVGProps> = ({
  color,
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className || ''}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ? COLORS[color] : COLORS['black']}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
}
