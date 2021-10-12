import { FC } from 'react'
import { Text } from '@geist-ui/react'

import RoundedImage from '@/components/Shared/RoundedImage'

type SiteProfileProps = {
  favicon: string
  name: string
  description: string
}
const SiteProfile: FC<SiteProfileProps> = ({ favicon, name, description }) => {
  return (
    <div className="flex items-center pb-4">
      <RoundedImage
        className="w-24 h-24"
        src={favicon}
      />
      <div className="pl-3">
        <Text
          className="font-light mb-0.5"
          h3
        >
          {name}
        </Text>
        <Text className="font-light mb-0.5 mt-0">
          {description}
        </Text>
      </div>
    </div>
  )
}

SiteProfile.displayName = 'DolanSiteProfile'
export default SiteProfile
