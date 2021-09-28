import useSWR from 'swr'

import { Category } from '@/lib/types'

interface UseCategoriesResult {
  categories: Category[]
  isLoading: boolean
  isError: boolean
}

export const useCategories = (): UseCategoriesResult => {
  const { data, error } = useSWR('/api/categories')

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}
