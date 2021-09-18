import { FC } from 'react'
import { Text, Avatar } from '@geist-ui/react'

type PostMetaProps = {
  title: string
  timestamp: number
}

const PostMeta: FC<PostMetaProps> = ({ title }: PostMetaProps) => {
  return (
    <div className="py-14 text-center">
      <Text
        h2
        className="font-medium"
      >
        {title}
      </Text>
      <Text
        small
        className="uppercase text-gray-500"
      >
        Posted 1 year ago
      </Text>
    </div>
  )
}

PostMeta.displayName = 'DolanPostMeta'
export default PostMeta
