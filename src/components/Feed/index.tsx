import React, { forwardRef, useMemo } from 'react'

import theme from 'styles/theme'

import { FeedProps } from './types'
import PostCard from 'components/PostCard'
import { useStateSelector } from 'hooks/useStateSelector'

import InfinityScrollLoading from 'components/InfinityScrollLoading'

import * as S from './styles'

const Feed: React.ForwardRefRenderFunction<HTMLDivElement, FeedProps> = (
  { posts, isRefetchingPostsData },
  ref
) => {
  const user = useStateSelector((state) => state.user.username)

  const postsSortedByMostRecent = useMemo(
    () =>
      posts.sort((a, b) => {
        const createdAtItemA = new Date(a.created_datetime).getTime()
        const createdAtItemB = new Date(b.created_datetime).getTime()
        return createdAtItemB - createdAtItemA
      }),
    [posts]
  )

  return (
    <S.Wrapper>
      {postsSortedByMostRecent.map((post, index) => (
        <div
          key={`${post.id}-${index}`}
          style={{ marginBottom: theme.spacings.small }}
        >
          <PostCard myPost={user === post.username} post={post} />
        </div>
      ))}
      {!isRefetchingPostsData ? (
        <S.LoadingMorePostsWrapper ref={ref} id="loadingMorePosts">
          <InfinityScrollLoading />
        </S.LoadingMorePostsWrapper>
      ) : null}
    </S.Wrapper>
  )
}

export default forwardRef(Feed)
