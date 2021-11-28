import useSWR from 'swr'

import { getApiLink } from '@/utils'
import { Category } from '@/lib/types'

type UseCategoriesResult = {
  categories: Category[]
  isLoading: boolean
  isError: boolean
}

export const useCategories = (): UseCategoriesResult => {
  const { data, error } = useSWR(getApiLink('categories', false))

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}
