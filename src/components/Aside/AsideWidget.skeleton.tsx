import { FC } from 'react'
import dynamic from 'next/dynamic'

import Widget from '@/components/Widgets'

const ContentLoader = dynamic(async () => await import('react-content-loader'))

const PostCardSkeleton: FC = (props) => (
  <div className="w-full text-center">
    <Widget>
      <ContentLoader
        className="w-full"
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        uniqueKey="AsideWidget.skeleton"
        {...props}
      >
        <rect
          x="0"
          y="0"
          width="20%"
          height="15"
        />
        <rect
          x="5"
          y="35"
          rx="9"
          ry="9"
          width="95%"
          height="20"
        />
        <rect
          x="5"
          y="70"
          rx="9"
          ry="9"
          width="95%"
          height="20"
        />
        <rect
          x="5"
          y="105"
          rx="9"
          ry="9"
          width="95%"
          height="20"
        />
      </ContentLoader>
    </Widget>
  </div>
)

PostCardSkeleton.displayName = 'DolanAsideSkeleton'
export default PostCardSkeleton
