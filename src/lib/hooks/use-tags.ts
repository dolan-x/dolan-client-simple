import useSWR from 'swr'

import { Tag } from '@/lib/types'

type UseTagsResult = {
  tags: Tag[]
  isLoading: boolean
  isError: boolean
}

export const useTags = (): UseTagsResult => {
  const { data, error } = useSWR('/api/tags')

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error
  }
}
