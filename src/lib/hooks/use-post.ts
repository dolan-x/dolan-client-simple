import useSWR from 'swr'

import { getApiLink } from '@/utils'
import {
  Post,
  PostID
} from '@/lib/types'

type UsePostResult = {
  post: Post
  isLoading: boolean
  isError: boolean
}

export const usePost = (id: PostID, fallbackData?: Post): UsePostResult => {
  const { data, error } = useSWR(getApiLink(`posts/${id}`, false), { fallbackData })

  return {
    post: data,
    isLoading: !error && !data,
    isError: error
  }
}
