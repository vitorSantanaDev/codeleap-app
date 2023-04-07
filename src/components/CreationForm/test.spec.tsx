import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/render-with-theme'

import CreationForm from '.'

describe('<CreationForm />', () => {
  it('should render the form', () => {
    renderWithTheme(<CreationForm />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const contentInput = screen.getByPlaceholderText(/content/i)
    expect(contentInput).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /create/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<CreationForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
