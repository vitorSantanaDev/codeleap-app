import React from 'react'
import { renderWithTheme } from 'utils/render-with-theme'
import Button from '.'
import { screen } from '@testing-library/react'
import theme from 'styles/theme'

describe('<Button />', () => {
  it('should render button background with default color', () => {
    renderWithTheme(<Button>Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()

    expect(button).toHaveStyle({ backgroundColor: theme.colors.primary })
  })

  it('should render button with background red', () => {
    renderWithTheme(<Button bgColor="red">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.red,
      color: theme.colors.white
    })
  })

  it('should render button with background red', () => {
    renderWithTheme(<Button bgColor="red">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.red,
      color: theme.colors.white
    })
  })

  it('should render button with background green', () => {
    renderWithTheme(<Button bgColor="green">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.green,
      color: theme.colors.white
    })
  })

  it('should render button with background white, and borders with color gray', () => {
    renderWithTheme(<Button bgColor="white">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
      border: `1px solid ${theme.colors.gray}`
    })
  })

  it('should render button with disabled style', () => {
    renderWithTheme(<Button bgColor="white">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })
})
