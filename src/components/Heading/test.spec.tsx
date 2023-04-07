import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/render-with-theme'

import theme from 'styles/theme'
import Heading from '.'

describe('<Heading />', () => {
  it('should render heading with default color and default size', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()

    expect(heading).toHaveStyle({
      color: theme.colors.black,
      fontSize: `calc(${theme.font.sizes.medium} + 0.2rem)`
    })
  })

  it('should render heading with color white and large size', () => {
    renderWithTheme(
      <Heading color="white" size="xlarge">
        Heading
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontSize: `calc(${theme.font.sizes.xlarge} + 0.2rem)`
    })
  })

  it('should render heading with color gray', () => {
    renderWithTheme(<Heading color="gray">Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toHaveStyle({
      color: theme.colors.gray
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Heading>Heading</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
