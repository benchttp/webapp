import { createElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle } from '../shared/style'
import { ROUTES } from './routes.constants'

export const Router = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {ROUTES.map(({ key, path, page }) => (
          <Route key={key} path={path} element={createElement(page)} />
        ))}
      </Routes>
    </>
  )
}
