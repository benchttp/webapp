import { ChangeEventHandler } from 'react'
import { IProps } from './selectInput.types'

export const handleChange = (
  setSelectedIndex: IProps['setSelectedIndex']
): ChangeEventHandler<HTMLSelectElement> => {
  const handler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedIndex(Number(e.target.value))
  }

  return handler
}
