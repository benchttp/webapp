import { Dispatch, SetStateAction, ChangeEventHandler } from 'react'

export const handleChange = (
  checked: boolean,
  setChecked: Dispatch<SetStateAction<boolean>>
): ChangeEventHandler<HTMLInputElement> => {
  const handler: ChangeEventHandler<HTMLInputElement> = () => {
    setChecked(!checked)
  }

  return handler
}
