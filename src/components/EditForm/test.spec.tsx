import React from 'react'
import { store } from 'redux/store'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook, screen, waitFor } from '@testing-library/react'

import EditForm from '.'
import { useMutationEditPost } from 'services/post.services'
import { renderWithProviders } from 'utils/render-with-providers'
import { toggleEditPostModal } from 'redux/actions/edit-post-slice'

jest.mock('hooks/useStateSelector', () => ({
  useStateSelector: () => ({ state: { editPostModal: { postID: 200 } } })
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

  it('should edit a post', async () => {
    renderWithProviders(<EditForm />)

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useMutationEditPost(), { wrapper })

    const titleInput = screen.getByPlaceholderText(/title/i) as HTMLInputElement

    const contentInput = screen.getByPlaceholderText(
      /content/i
    ) as HTMLTextAreaElement

    const submitButton = screen.getByRole('button', { name: /save/i })
    expect(submitButton).toBeDisabled()

    userEvent.type(titleInput, 'new title')

    expect(titleInput.value).toBe('new title')

    expect(submitButton).toBeDisabled()

    userEvent.type(contentInput, 'new content')

    expect(contentInput.value).toBe('new content')

    expect(submitButton).not.toBeDisabled()

    userEvent.click(submitButton)

    const post = { content: 'new content', title: 'new title' }

    await waitFor(async () => {
      expect(
        await result.current.mutateAsync({ payload: post, postID: 200 })
      ).toStrictEqual({
        id: 200,
        title: 'new title',
        content: 'new content',
        username: 'vitor',
        created_datetime: '2023-04-11T11:54:35.909Z'
      })
    })

    expect(
      await screen.findByText('Post successfully updated')
    ).toBeInTheDocument()
  })

  it('should cancel the editing of the post when there is a click on the cancel button', () => {
    renderWithProviders(<EditForm />)

    const cancelButton = screen.getByRole('button', { name: /cancel/i })

    userEvent.click(cancelButton)

    store.dispatch(toggleEditPostModal(null))

    expect(store.getState().editPostModal.postID).toBe(null)
  })

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<EditForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
