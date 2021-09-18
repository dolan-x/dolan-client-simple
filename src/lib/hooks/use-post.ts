import useSWR from 'swr'

import { Post, PostID } from '@/lib/types'

type UsePost = {
  post: Post
  isLoading: boolean
  isError: boolean
}

export const usePost = (id: PostID, fallbackData?: Post): UsePost => {
  const { data, error } = useSWR(`/api/posts/${id}`, { fallbackData })

  return {
    post: data,
    isLoading: !error && !data,
    isError: error
  }
}
