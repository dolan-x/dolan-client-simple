import useSWR from 'swr'

import { getApiLink } from '@/utils'
import { Tag } from '@/lib/types'

type UseTagsResult = {
  tags: Tag[]
  isLoading: boolean
  isError: boolean
}

export const useTags = (): UseTagsResult => {
  const { data, error } = useSWR(getApiLink('tags', false))

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error
  }
}
