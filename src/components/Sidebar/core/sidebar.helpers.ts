import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export const handleCardClick = (
  setActiveCardIndex: Dispatch<SetStateAction<number>>,
  index: number
) => {
  const handler: MouseEventHandler = () => {
    setActiveCardIndex(index)
  }

  return handler
}

export const handleSearchInputChange = (search: string) => {
  console.log(`Make API call with search terms : ${search}`)
}
