import React from 'react'

import { screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/render-with-theme'

import EditForm from '.'

jest.mock('hooks/useStateSelector', () => ({
  useStateSelector: () => ({ state: { editPostModal: { postID: 22 } } })
}))

describe('<EditForm />', () => {
  it('should render the form', () => {
    renderWithProviders(<EditForm />)

    const titleInput = screen.getByPlaceholderText(/title/i)
    expect(titleInput).toBeInTheDocument()

    const contentInput = screen.getByPlaceholderText(/content/i)
    expect(contentInput).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: /save/i })
    expect(saveButton).toBeInTheDocument()

    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    expect(cancelButton).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<EditForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
