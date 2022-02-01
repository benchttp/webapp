import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './shared/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
