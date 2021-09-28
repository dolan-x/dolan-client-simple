import useSWR from 'swr'

import { Tag, TagSlug } from '@/lib/types'

interface UseTagResult {
  tag: Tag
  isLoading: boolean
  isError: boolean
}

export const useTag = (slug: TagSlug): UseTagResult => {
  const { data, error } = useSWR(`/api/tags/${slug}`)

  return {
    tag: data,
    isLoading: !error && !data,
    isError: error
  }
}
