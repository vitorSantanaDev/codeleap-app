import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { Provider } from 'react-redux'
import { persistor, store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import theme from 'styles/theme'
import { GlobalStyles } from 'styles/global-styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
