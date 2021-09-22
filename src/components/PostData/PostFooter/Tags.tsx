import { FC } from 'react'
import { HashtagIcon } from '@heroicons/react/outline'

import Badge from '@/components/Common/Badge'

import { getTagLink } from '@/utils'

type TagsProps = {
  tags: string[]
}
const Tags: FC<TagsProps> = ({ tags }: TagsProps) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Badge
          href={getTagLink(tag)}
          background={false}
          key={index}
        >
          <div className="flex items-center mr-1">
            <HashtagIcon className="w-5 h-5 text-yellow-300" />
          </div>
          <div>
            {tag}
          </div>
        </Badge>
      ))}
    </div>
  )
}

Tags.displayName = 'DolanTagsForPost'
export default Tags
