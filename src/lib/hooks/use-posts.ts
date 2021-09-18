import useSWR from 'swr'

import { Post } from '@/lib/types'

type UsePosts = {
  posts: Post[]
  isLoading: boolean
  isError: boolean
}

export const usePosts = (): UsePosts => {
  const { data, error } = useSWR('/api/posts')

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  }
}
