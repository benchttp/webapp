import { Dispatch, MouseEventHandler } from 'react'

import { setSelectedRun } from 'shared/store/slices/general'

export const handleCardClick = (
  dispatch: Dispatch<unknown>,
  action: typeof setSelectedRun,
  payload: string
) => {
  const handler: MouseEventHandler = () => {
    dispatch(action(payload))
  }

  return handler
}

export const handleSearchInputChange = (search: string) => {
  console.log(`Make API call with search terms : ${search}`)
}
