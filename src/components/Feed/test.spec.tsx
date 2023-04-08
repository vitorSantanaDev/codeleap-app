import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/render-with-providers'
import { Post } from 'components/PostCard/types'

import Feed from '.'

const postsMock: Post[] = [
  {
    content:
      'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    title: 'My First Post at CodeLeap Network!',
    created_datetime: new Date().toISOString(),
    id: 1,
    username: 'Cassia'
  },
  {
    content:
      'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    title: 'My First Post at CodeLeap Network!',
    created_datetime: new Date().toISOString(),
    id: 1,
    username: 'Fran'
  },
  {
    content:
      'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    title: 'My First Post at CodeLeap Network!',
    created_datetime: new Date().toISOString(),
    id: 1,
    username: 'vitor'
  }
]

describe('<Feed />', () => {
  it('should render posts', () => {
    renderWithProviders(<Feed posts={postsMock} />)

    const posts = screen.getAllByText(/My First Post at CodeLeap Network!/i)
    expect(posts).toHaveLength(3)
  })

  it('should macth snapshots', () => {
    const { container } = renderWithProviders(<Feed posts={postsMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
