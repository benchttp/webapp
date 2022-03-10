import { MouseEventHandler } from 'react'
import { v4 as uuid } from 'uuid'
import { IProps } from './headerInputValue.types'

export const handleAddHeaderValueClick = (
  values: IProps['values'],
  setValues: IProps['setValues'],
  index: IProps['index']
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    const newValues = [...values]
    newValues.splice(index + 1, 0, { value: '', uuid: uuid() })
    setValues(newValues)
  }

  return handler
}

export const handleDeleteHeaderValueClick = (
  values: IProps['values'],
  setValues: IProps['setValues'],
  index: IProps['index']
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    setValues(values.filter((_, valueIndex) => valueIndex !== index))
  }

  return handler
}
