import React from 'react'

import PostCard from '.'
import { renderWithTheme } from 'utils/render-with-theme'
import { screen } from '@testing-library/react'

const postMock = {
  id: 20,
  created_datetime: '2023-03-07T00:00:00',
  username: '@Victor',
  content: 'Curabitur suscipit suscipit tellus.',
  title: 'My First Post at CodeLeap Network!'
}

describe('<PostCard />', () => {
  it('should render the post', () => {
    renderWithTheme(<PostCard post={postMock} />)

    const username = screen.getByText(/@victor/i)
    expect(username).toBeInTheDocument()

    const postContent = screen.getByText(/Curabitur suscipit suscipit tellus./i)
    expect(postContent).toBeInTheDocument()

    const postTitle = screen.getByText(/My First Post at CodeLeap Network!/i)
    expect(postTitle).toBeInTheDocument()

    const buttonDeletePost = screen.queryByRole('button', {
      name: /trash icon/i
    })
    expect(buttonDeletePost).not.toBeInTheDocument()

    const buttonEditPost = screen.queryByRole('button', {
      name: /edit icon/i
    })
    expect(buttonEditPost).not.toBeInTheDocument()
  })

  it('should render post with action buttons, when myPost is true', () => {
    renderWithTheme(<PostCard myPost post={postMock} />)

    const buttonDeletePost = screen.getByRole('button', {
      name: /trash icon/i
    })
    expect(buttonDeletePost).toBeInTheDocument()

    const buttonEditPost = screen.getByRole('button', {
      name: /edit icon/i
    })
    expect(buttonEditPost).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<PostCard myPost post={postMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
