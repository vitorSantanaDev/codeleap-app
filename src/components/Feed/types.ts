import { Post } from 'components/PostCard/types'

export type FeedProps = {
  posts: Post[]
  isRefetchingPostsData?: boolean
}
