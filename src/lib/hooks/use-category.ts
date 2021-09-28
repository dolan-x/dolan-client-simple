import useSWR from 'swr'

import { Category, CategorySlug } from '@/lib/types'

type UseCategoryResult = {
  category: Category
  isLoading: boolean
  isError: boolean
}

export const useCategory = (slug: CategorySlug): UseCategoryResult => {
  const { data, error } = useSWR(`/api/categories/${slug}`)

  return {
    category: data,
    isLoading: !error && !data,
    isError: error
  }
}
