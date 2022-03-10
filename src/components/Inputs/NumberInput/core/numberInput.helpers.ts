import { ChangeEventHandler } from 'react'

import { IProps } from './numberInput.types'

export const handleChange = (
  setValue: IProps['setValue']
): ChangeEventHandler<HTMLInputElement> => {
  const handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return handler
}
