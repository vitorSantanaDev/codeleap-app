import React, { ReactElement } from 'react'

import theme from 'styles/theme'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

export const renderWithTheme = (component: ReactElement) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
