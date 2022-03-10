import { useEffect } from 'react'
import { IHook } from './headerInputValue.types'

export const useHeaderInputValue: IHook = ({
  index,
  values,
  setValues,
  value,
}) => {
  useEffect(() => {
    const newValues = [...values]
    const oldValue = newValues[index]
    newValues[index] = { ...oldValue, value }

    setValues(newValues)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, value])
}
