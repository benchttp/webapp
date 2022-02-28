import { ChangeEventHandler } from 'react'
import { ControllerRenderProps } from 'react-hook-form'

import { IProps } from './textInput.interfaces'

export const handleChange = (
  submitOnChange: IProps['submitOnChange'],
  onChange: IProps['onChange'],
  reactHooksOnChange: ControllerRenderProps['onChange']
) => {
  const handler: ChangeEventHandler = (e) => {
    if (!onChange) {
      return
    }

    if (submitOnChange) {
      onChange(e)
    }

    reactHooksOnChange(e)
  }

  return handler
}
