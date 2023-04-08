import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { Provider } from 'react-redux'
import { persistor, store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import theme from 'styles/theme'
import { GlobalStyles } from 'styles/global-styles'

import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
            <ToastContainer />
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
