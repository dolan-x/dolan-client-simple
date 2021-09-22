import useSWR from 'swr'

type UseCategoriesResult = {
  categories: string[]
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
