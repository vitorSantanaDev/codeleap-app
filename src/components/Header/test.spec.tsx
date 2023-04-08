import React from 'react'
import { renderWithProviders } from 'utils/render-with-providers'
import Header from '.'
import { screen } from '@testing-library/react'

describe('<Header />', () => {
  it('should render header', () => {
    const { container } = renderWithProviders(
      <Header>
        <span>CodeLeap</span>
      </Header>
    )

    const logo = screen.getByText(/codeleap/i)
    expect(logo).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: 700;
        color: #FFFFFF;
        padding: calc(2.4rem + 0.3rem) calc(3.2rem + 0.5rem);
        background-color: #7695EC;
        font-size: calc(2.0rem + 0.2rem);
      }

      <header
        class="c0"
      >
        <span>
          CodeLeap
        </span>
      </header>
    `)
  })
})
