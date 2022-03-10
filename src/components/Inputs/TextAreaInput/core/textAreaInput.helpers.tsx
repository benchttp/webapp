import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

export const handleChange = (
  setValue: Dispatch<SetStateAction<string>>
): ChangeEventHandler<HTMLTextAreaElement> => {
  const handler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value)
  }

  return handler
}
