import { useEffect, useMemo } from 'react'

import { debounce } from 'shared/helpers/utils'

import { handleSearchInputChange } from './sidebar.helpers'
import { IHook } from './sidebar.types'

export const useSidebar: IHook = ({ search }) => {
  const debouncedHandleSearchInputChange = useMemo(
    () => debounce(handleSearchInputChange, 800),
    []
  )

  useEffect(() => {
    debouncedHandleSearchInputChange(search)
  }, [debouncedHandleSearchInputChange, search])
}
