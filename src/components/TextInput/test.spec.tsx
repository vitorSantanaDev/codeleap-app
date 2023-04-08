import React from 'react'
import { renderWithProviders } from 'utils/render-with-providers'
import TextInput from '.'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<TextInput />', () => {
  it('should render input with label', () => {
    renderWithProviders(<TextInput label="Title" name="title" />)

    const input = screen.getByLabelText(/title/i)
    expect(input).toBeInTheDocument()
  })

  it('should render input without label', () => {
    renderWithProviders(<TextInput name="title" />)

    const input = screen.queryByLabelText(/title/i)
    expect(input).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithProviders(<TextInput placeholder="Title" />)

    const input = screen.getByPlaceholderText('Title')
    expect(input).toBeInTheDocument()
  })

  it('should there must ne changes in the value whwn typing in the input', async () => {
    const handleChange = jest.fn()
    renderWithProviders(
      <TextInput handleChange={handleChange} label="Title" name="title" />
    )

    const input = screen.getByRole('textbox')
    const newValue = 'My title'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).toHaveValue(newValue)
      expect(handleChange).toHaveBeenCalledTimes(newValue.length)
    })

    expect(handleChange).toHaveBeenCalledWith(newValue)
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(
      <TextInput label="Title" name="title" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
