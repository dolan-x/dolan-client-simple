import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Card } from '@geist-ui/react'

const ContentLoader = dynamic(() => import('react-content-loader'))

const PostLoader: FC = (props) => (
  <div className="w-full text-center pt-4">
    <Card>
      <ContentLoader
        className="w-full"
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
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
    </Card>
  </div>
)

export default PostLoader
