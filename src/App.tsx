import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import storeSingleton, { history } from './store/singleton'
import AppRoute from './appRoute'
import './app.css'

const store = storeSingleton.getInstance()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoute />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
