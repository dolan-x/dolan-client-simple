import useSWR from 'swr'

import { getApiLink } from '@/utils'
import {
  Category,
  CategorySlug
} from '@/lib/types'

type UseCategoryResult = {
  category: Category
  isLoading: boolean
  isError: boolean
}

export const useCategory = (slug: CategorySlug): UseCategoryResult => {
  const { data, error } = useSWR(getApiLink(`categories/${slug}`, false))

  return {
    category: data,
    isLoading: !error && !data,
    isError: error
  }
}
