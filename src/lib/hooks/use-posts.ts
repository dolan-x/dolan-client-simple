import useSWR from 'swr'

import { Post } from '@/lib/types'

interface UsePostsResult {
  posts: Post[]
  isLoading: boolean
  isError: boolean
}

export const usePosts = (): UsePostsResult => {
  const { data, error } = useSWR('/api/posts')

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  }
}
