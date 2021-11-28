import useSWR from 'swr'

import { getApiLink } from '@/utils'
import { SiteProfile } from '@/lib/types'

type UseSiteProfileResult = {
  siteProfile: SiteProfile
  isLoading: boolean
  isError: boolean
}

export const useSiteProfile = (): UseSiteProfileResult => {
  const { data, error } = useSWR(getApiLink('profile/site', false))

  return {
    siteProfile: data,
    isLoading: !error && !data,
    isError: error
  }
}
