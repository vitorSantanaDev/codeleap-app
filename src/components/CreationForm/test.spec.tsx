import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/render-with-providers'

import CreationForm from '.'

describe('<CreationForm />', () => {
  it('should render the form', () => {
    renderWithProviders(<CreationForm />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const contentInput = screen.getByPlaceholderText(/content/i)
    expect(contentInput).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /create/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<CreationForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
