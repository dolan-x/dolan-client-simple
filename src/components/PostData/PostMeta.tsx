import { FC, useMemo } from 'react'
import {
  UsersIcon,
  ClockIcon
} from '@heroicons/react/outline'

import Widget from '@/components/Widgets'

import { getLocalTime } from '@/utils'
import { Post, Author } from '@/lib/types'

const PostMetaItem: FC = ({ children }) => {
  return (
    <div className="flex items-center mr-3">
      {children}
    </div>
  )
}

interface PostMetaProps {
  authorNames: Array<Author['name']>
  timestamp: Post['timestamp']
}
const PostMeta: FC<PostMetaProps> = ({ authorNames, timestamp }: PostMetaProps) => {
  const timeString = useMemo(() => getLocalTime(timestamp), [timestamp])

  return (
    <Widget>
      <Widget.Content className="flex">
        <PostMetaItem>
          <UsersIcon className="inline w-4 h-4" />
          {authorNames}
        </PostMetaItem>
        <PostMetaItem>
          <ClockIcon className="inline w-4 h-4" />
          {timeString}
        </PostMetaItem>
      </Widget.Content>
    </Widget>
  )
}

PostMeta.displayName = 'DolanPostMeta'
export default PostMeta
