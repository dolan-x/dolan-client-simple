import { FC } from 'react'
import dynamic from 'next/dynamic'

import Widget from '.'

const ContentLoader = dynamic(() => import('react-content-loader'))

const PageSkeleton: FC = (props) => (
  <div className="w-full text-center">
    <Widget>
      <ContentLoader
        className="w-full"
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        uniqueKey="Page.skeleton"
        {...props}
      >
        <rect
          x="5"
          y="5"
          rx="0"
          ry="0"
          width="23%"
          height="30"
        />
        <rect
          x="5"
          y="70"
          rx="9"
          ry="9"
          width="98%"
          height="17"
        />
        <rect
          x="5"
          y="92"
          rx="9"
          ry="9"
          width="90%"
          height="17"
        />
        <rect
          x="5"
          y="114"
          rx="9"
          ry="9"
          width="94%"
          height="17"
        />
      </ContentLoader>
    </Widget>
  </div>
)

PageSkeleton.displayName = 'DolanPageSkeleton'
export default PageSkeleton
