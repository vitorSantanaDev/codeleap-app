import React from 'react'
import { renderWithProviders } from 'utils/render-with-providers'
import TextAreaInput from '.'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<TextAreaInput />', () => {
  it('should render textarea with label', () => {
    renderWithProviders(<TextAreaInput label="content" name="content" />)

    const input = screen.getByLabelText(/content/i)
    expect(input).toBeInTheDocument()
  })

  it('should render textarea without label', () => {
    renderWithProviders(<TextAreaInput name="content" />)

    const input = screen.queryByLabelText(/content/i)
    expect(input).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithProviders(<TextAreaInput placeholder="content" />)

    const input = screen.getByPlaceholderText('content')
    expect(input).toBeInTheDocument()
  })

  it('should there must ne changes in the value whwn typing in the textarea', async () => {
    const handleChange = jest.fn()
    renderWithProviders(
      <TextAreaInput
        handleChange={handleChange}
        label="content"
        name="content"
      />
    )

    const input = screen.getByRole('textbox')
    const newValue = 'My content'

    userEvent.type(input, newValue)

    await waitFor(() => {
      expect(input).toHaveValue(newValue)
      expect(handleChange).toHaveBeenCalledTimes(newValue.length)
    })

    expect(handleChange).toHaveBeenCalledWith(newValue)
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(
      <TextAreaInput label="content" name="content" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
