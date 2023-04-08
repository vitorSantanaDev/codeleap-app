import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils/render-with-providers'

import theme from 'styles/theme'
import Heading from '.'

describe('<Heading />', () => {
  it('should render heading with default color and default size', () => {
    renderWithProviders(<Heading>Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /heading/i })
    expect(heading).toBeInTheDocument()

    expect(heading).toHaveStyle({
      color: theme.colors.black,
      fontSize: `calc(${theme.font.sizes.medium} + 0.2rem)`
    })
  })

  it('should render heading with color white and large size', () => {
    renderWithProviders(
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
    renderWithProviders(<Heading color="gray">Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /heading/i })

    expect(heading).toHaveStyle({
      color: theme.colors.gray
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<Heading>Heading</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
