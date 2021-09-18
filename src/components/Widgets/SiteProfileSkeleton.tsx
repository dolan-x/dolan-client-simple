import { FC } from 'react'
import dynamic from 'next/dynamic'

const ContentLoader = dynamic(() => import('react-content-loader'))

const SiteProfileSkeleton: FC = (props) => (
  <div className="w-full text-center">
    <ContentLoader
      className="w-full"
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
      />
      <rect
        x="120"
        y="20"
        rx="9"
        ry="9"
        width="40%"
        height="24"
      />
      <rect
        x="120"
        y="60"
        rx="5"
        ry="5"
        width="60%"
        height="12"
      />
      <rect
        x="120"
        y="80"
        rx="5"
        ry="5"
        width="60%"
        height="12"
      />
    </ContentLoader>
  </div>
)

SiteProfileSkeleton.displayName = 'DolanSiteProfileSkeleton'
export default SiteProfileSkeleton
