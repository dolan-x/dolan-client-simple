import useSWR from 'swr'

import { Post } from '@/lib/types'

type UsePost = {
  post: Post,
  isLoading: boolean,
  isError: boolean
}

export default function usePost (id: number, initialData?: Post): UsePost {
  const { data, error } = useSWR(`/api/post/${id}`, { initialData })

  return {
    post: data,
    isLoading: !error && !data,
    isError: error
  }
}
