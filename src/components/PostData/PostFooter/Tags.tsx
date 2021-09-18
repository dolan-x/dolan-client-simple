import { FC } from 'react'
import { Hash } from '@geist-ui/react-icons'

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
          <Hash className="transform scale-75 text-yellow-300" />
          {tag}
        </Badge>
      ))}
    </div>
  )
}

Tags.displayName = 'DolanTagsForPost'
export default Tags
