import useSWR from 'swr'

import { Category, CategoryName } from '@/lib/types'

type UseCategory = {
  category: Category
  isLoading: boolean
  isError: boolean
}

export const useCategory = (name: CategoryName): UseCategory => {
  const { data, error } = useSWR(`/api/categories/${name}`)

  return {
    category: data,
    isLoading: !error && !data,
    isError: error
  }
}
