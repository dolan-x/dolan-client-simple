import { FC } from 'react'
import randomColor from 'randomcolor'

import TagElement from './Tag'

import { getTagLink } from '@/utils'
import { Tag } from '@/lib/types'

type TagCloudProps = {
  tags: Tag[]
}
const TagCloud: FC<TagCloudProps> = ({ tags }) => {
  const generateRandomColor = (): string => randomColor({ luminosity: 'light' })

  return (
    <div>
      {tags.map(({ name, count }, index) => (
        <TagElement
          key={index}
          backgroundColor={generateRandomColor()}
          name={name}
          count={count}
          href={getTagLink(name)}
        />
      ))}
    </div>
  )
}

TagCloud.displayName = 'DolanTagCloud'
export default TagCloud
