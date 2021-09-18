import useSWR from 'swr'

import { SiteProfile } from '@/lib/types'

type UseSiteProfile = {
  siteProfile: SiteProfile
  isLoading: boolean
  isError: boolean
}

export const useSiteProfile = (): UseSiteProfile => {
  const { data, error } = useSWR('/api/profile/site')

  return {
    siteProfile: data,
    isLoading: !error && !data,
    isError: error
  }
}
