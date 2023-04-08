import { Provider } from 'react-redux'
import React, { PropsWithChildren } from 'react'

import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { RenderOptions, render } from '@testing-library/react'

import { RootState } from 'redux/store'
import { userReducer } from 'redux/actions/user-slice'
import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from 'react-query'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: PreloadedState<RootState>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    initialState = {},
    store = configureStore({
      reducer: { user: userReducer },
      preloadedState: initialState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </QueryClientProvider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
