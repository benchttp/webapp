import { FC } from 'react'
import { ISVGProps } from 'shared/helpers/types'

export const IconTime: FC<ISVGProps> = ({
  className,
  width = 52,
  height = 52,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.6" cx="28" cy="28" r="28" fill="#F1B445" />
      <path
        d="M28 41.3334C35.3638 41.3334 41.3333 35.3638 41.3333 28C41.3333 20.6362 35.3638 14.6667 28 14.6667C20.6362 14.6667 14.6667 20.6362 14.6667 28C14.6667 35.3638 20.6362 41.3334 28 41.3334Z"
        stroke="#F1B445"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 20V28L33.3333 30.6667"
        stroke="#F1B445"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
