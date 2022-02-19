import { useMemo } from 'react'
import { CustomFunction } from '../../../shared/helpers/types'
import { debounce } from '../../../shared/helpers/utils'

export const useSidebar: CustomFunction<
  void,
  { debouncedHandleSearchInputChange: (...args: any[]) => void }
> = () => {
  const handleSearchInputChange = (searchTerms: string) => {
    console.log(`Make API call with search terms : ${searchTerms}`)
  }

  const debouncedHandleSearchInputChange = useMemo(
    () => debounce(handleSearchInputChange, 800),
    []
  )

  return { debouncedHandleSearchInputChange }
}
