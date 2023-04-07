export type PostCardProps = {
  myPost?: boolean
  post: Post
}

export type Post = {
  id: number
  title: string
  content: string
  username: string
  created_datetime: string
}
