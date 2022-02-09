import { createElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import { GlobalStyle } from '../shared/style'
import { ROUTES } from './routes.constants'

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Routes>
          {ROUTES.map(({ key, path, page }) => (
            <Route key={key} path={path} element={createElement(page)} />
          ))}
        </Routes>
      </MainLayout>
    </>
  )
}

export default Router
