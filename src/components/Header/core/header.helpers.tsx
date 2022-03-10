import { MouseEventHandler } from 'react'
import { NavigateFunction } from 'react-router-dom'

export const handleGenerateConfigClick = (
  navigate: NavigateFunction
): MouseEventHandler => {
  const handler: MouseEventHandler = () => {
    navigate('/setup')
  }

  return handler
}
