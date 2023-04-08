import React from 'react'

import theme from 'styles/theme'
import PostCard from 'components/PostCard'
import { useStateSelector } from 'hooks/useStateSelector'

import { FeedProps } from './types'

import * as S from './styles'

const Feed: React.FC<FeedProps> = ({ posts }) => {
  const user = useStateSelector((state) => state.user.username)
  return (
    <S.Wrapper>
      {posts.map((post, index) => (
        <div
          key={`${post.id}-${index}`}
          style={{ marginBottom: theme.spacings.small }}
        >
          <PostCard myPost={user === post.username} post={post} />
        </div>
      ))}
    </S.Wrapper>
  )
}

export default Feed
