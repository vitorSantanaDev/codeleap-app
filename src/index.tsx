import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { persistor, store } from 'redux/store'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyles } from 'styles/global-styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
