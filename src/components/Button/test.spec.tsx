import React from 'react'
import { renderWithProviders } from 'utils/render-with-providers'
import Button from '.'
import { screen } from '@testing-library/react'
import theme from 'styles/theme'

describe('<Button />', () => {
  it('should render button background with default color', () => {
    renderWithProviders(<Button>Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()

    expect(button).toHaveStyle({ backgroundColor: theme.colors.primary })
  })

  it('should render button with background red', () => {
    renderWithProviders(<Button bgColor="red">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.red,
      color: theme.colors.white
    })
  })

  it('should render button with background red', () => {
    renderWithProviders(<Button bgColor="red">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.red,
      color: theme.colors.white
    })
  })

  it('should render button with background green', () => {
    renderWithProviders(<Button bgColor="green">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.green,
      color: theme.colors.white
    })
  })

  it('should render button with background white, and borders with color gray', () => {
    renderWithProviders(<Button bgColor="white">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
      border: `1px solid ${theme.colors.gray}`
    })
  })

  it('should render button with disabled style', () => {
    renderWithProviders(<Button bgColor="white">Button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<Button>Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
