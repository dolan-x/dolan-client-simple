import useSWR from 'swr'

import { Tag, TagName } from '@/lib/types'

type UseTag = {
  tag: Tag
  isLoading: boolean
  isError: boolean
}

export const useTag = (name: TagName): UseTag => {
  const { data, error } = useSWR(`/api/tags/${name}`)

  return {
    tag: data,
    isLoading: !error && !data,
    isError: error
  }
}
