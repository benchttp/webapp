import { useEffect } from 'react'
import { IHook } from './queryParamInput.types'

export const useQueryParamInput: IHook = ({
  setQueryParams,
  key,
  value,
  index,
  queryParams,
}) => {
  useEffect(() => {
    const newQueryParams = [...queryParams]
    const queryParam = newQueryParams[index]
    newQueryParams[index] = { ...queryParam, key, value }

    setQueryParams(newQueryParams)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, key, value])
}
