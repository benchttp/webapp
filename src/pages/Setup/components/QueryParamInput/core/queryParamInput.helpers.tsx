import { MouseEventHandler } from 'react'
import { IProps } from './queryParamInput.types'

export const handleDeleteClick = (
  queryParams: IProps['queryParams'],
  setQueryParams: IProps['setQueryParams'],
  index: IProps['index']
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    setQueryParams(
      queryParams.filter((_, queryParamIndex) => queryParamIndex !== index)
    )
  }

  return handler
}
