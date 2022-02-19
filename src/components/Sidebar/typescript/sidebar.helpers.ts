import { UseFormHandleSubmit } from 'react-hook-form'
import { IForm } from './sidebar.types'

export const onChange = (
  handleSubmit: UseFormHandleSubmit<IForm>,
  callback: (s: string) => void
) =>
  handleSubmit((data) => {
    callback(data.search)
  })
