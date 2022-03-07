import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'

import { IForm } from './sidebar.types'

export const onChange = (
  handleSubmit: UseFormHandleSubmit<IForm>,
  callback: (s: string) => void
) =>
  handleSubmit((data) => {
    callback(data.search)
  })

export const handleCardClick = (
  setActiveCardIndex: Dispatch<SetStateAction<number>>,
  index: number
) => {
  const handler: MouseEventHandler = () => {
    setActiveCardIndex(index)
  }

  return handler
}
