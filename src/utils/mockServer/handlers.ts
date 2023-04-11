import { rest } from 'msw'
import { Post } from 'components/PostCard/types'

type CreatePostRequest = Omit<Post, 'id' | 'created_datetime'>

export const handlers = [
  rest.post<CreatePostRequest>(
    `${process.env.REACT_APP_API_URL_DEVELOPMENT}/careers/`,
    async (req, res, ctx) => {
      const { content, title, username } = req.body
      return res(
        ctx.status(201),
        ctx.json({
          id: 200,
          title,
          username,
          content,
          created_datetime: '2023-04-11T11:54:35.909Z'
        })
      )
    }
  )
]
