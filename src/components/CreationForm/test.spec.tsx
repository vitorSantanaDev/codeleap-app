import React from 'react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'utils/render-with-providers'

import CreationForm from '.'
import { useMutationCreatePost } from 'services/post.services'

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

  it('should register a new post', async () => {
    renderWithProviders(<CreationForm />)

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useMutationCreatePost(), { wrapper })

    const titleInput = screen.getByPlaceholderText(/title/i) as HTMLInputElement

    const contentInput = screen.getByPlaceholderText(
      /content/i
    ) as HTMLTextAreaElement

    const submitButton = screen.getByRole('button', { name: /create/i })
    expect(submitButton).toBeDisabled()

    userEvent.type(titleInput, 'title')

    expect(titleInput.value).toBe('title')

    expect(submitButton).toBeDisabled()

    userEvent.type(contentInput, 'content')

    expect(contentInput.value).toBe('content')

    expect(submitButton).not.toBeDisabled()

    const post = {
      content: 'content',
      title: 'title',
      username: 'vitor'
    }

    userEvent.click(submitButton)

    await waitFor(async () => {
      expect(await result.current.mutateAsync(post)).toStrictEqual({
        id: 200,
        title: 'title',
        username: 'vitor',
        content: 'content',
        created_datetime: '2023-04-11T11:54:35.909Z'
      })
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<CreationForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
