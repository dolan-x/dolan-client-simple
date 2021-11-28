import useSWR from 'swr'

import { getApiLink } from '@/utils'
import {
  Tag,
  TagSlug
} from '@/lib/types'

type UseTagResult = {
  tag: Tag
  isLoading: boolean
  isError: boolean
}

export const useTag = (slug: TagSlug): UseTagResult => {
  const { data, error } = useSWR(getApiLink(`tags/${slug}`, false))

  return {
    tag: data,
    isLoading: !error && !data,
    isError: error
  }
}
