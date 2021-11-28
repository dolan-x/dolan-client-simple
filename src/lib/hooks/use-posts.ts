import useSWR from 'swr'

import { getApiLink } from '@/utils'
import { Post } from '@/lib/types'

type UsePostsResult = {
  posts: Post[]
  isLoading: boolean
  isError: boolean
}

export const usePosts = (): UsePostsResult => {
  const { data, error } = useSWR(getApiLink('posts', false))

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  }
}
