import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export const toggle = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    setIsOpen(!isOpen)
  }

  return handler
}
