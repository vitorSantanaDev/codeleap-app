import { UseQueryResult, useMutation, useQuery } from 'react-query'
import axiosInstance from './api'
import { QUERIES } from './queries'
import { toast } from 'react-toastify'
import { Post } from 'components/PostCard/types'

export const getAllPostsService = async () => {
  try {
    const response = await axiosInstance.get(`/careers/`)
    return response.data.results
  } catch (err) {
    const error = err as { message: string }
    toast.error(error.message)
  }
}

export const useGetAllPosts = (): UseQueryResult<Post[]> => {
  return useQuery(QUERIES.POSTS, getAllPostsService, {
    retry: 2,
    refetchOnWindowFocus: true
  })
}

type CreatePostRequest = { username: string; content: string; title: string }

export const createPostService = async (payload: CreatePostRequest) => {
  try {
    const response = await axiosInstance.post(`/careers/`, { ...payload })

    return response.data
  } catch (err) {
    const error = err as { message: string }
    console.log(err)
    toast.error(error.message)
  }
}

export const useMutationCreatePost = () => {
  return useMutation(createPostService)
}

type EditPostRequest = {
  payload: { content: string; title: string }
  postID: number
}

export const editPostService = async (payload: EditPostRequest) => {
  try {
    const response = await axiosInstance.patch(`/careers/${payload.postID}/`, {
      ...payload.payload
    })

    return response.data
  } catch (err) {
    const error = err as { message: string }
    console.log(err)
    toast.error(error.message)
  }
}

export const useMutationEditPost = () => {
  return useMutation(editPostService)
}

type DeletePostRequest = {
  postID: number
}

export const deletePostService = async (payload: DeletePostRequest) => {
  try {
    const response = await axiosInstance.delete(`/careers/${payload.postID}/`)

    return response.data
  } catch (err) {
    const error = err as { message: string }
    console.log(err)
    toast.error(error.message)
  }
}

export const useMutationDeletePost = () => {
  return useMutation(deletePostService)
}

type FetchPostsRequest = {
  offset?: number
  limit?: number
}

export const fetchPosts = async ({
  limit = 10,
  offset = 10
}: FetchPostsRequest) => {
  try {
    const response = await axiosInstance.get(
      `/careers/?limit=${limit}&offset=${offset}`
    )
    return response.data.results
  } catch (err) {
    const error = err as { message: string }
    toast.error(error.message)
  }
}

export const useFetchPosts = (
  params?: FetchPostsRequest
): UseQueryResult<Post[]> => {
  return useQuery(
    QUERIES.INFINITY_POSTS,
    async () =>
      await fetchPosts({ limit: params?.limit, offset: params?.offset }),
    {
      retry: 2,
      refetchOnWindowFocus: true
    }
  )
}
