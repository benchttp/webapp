import { useEffect } from 'react'

import { IHook } from './headerInput.types'

export const useHeaderInput: IHook = ({
  headers,
  setHeaders,
  key,
  index,
  values,
}) => {
  useEffect(() => {
    if (headers.length === 1 && values.length === 0) {
      setHeaders([])
      return
    }

    if (values.length === 0) {
      setHeaders(headers.filter((_, headerIndex) => headerIndex !== index))
      return
    }

    const newHeaders = [...headers]
    const header = newHeaders[index]
    newHeaders[index] = { ...header, key, values }

    setHeaders(newHeaders)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, key, values])
}
