import useSWR from 'swr'

type UseCategories = {
  categories: string[]
  isLoading: boolean
  isError: boolean
}

export const useCategories = (): UseCategories => {
  const { data, error } = useSWR('/api/categories')

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  }
}
