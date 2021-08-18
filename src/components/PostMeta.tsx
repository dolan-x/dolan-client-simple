import { FC } from 'react'
import { Text, Avatar } from '@geist-ui/react'
import { Author } from '@/lib/types'

type PostMetaProps = {
  title: string
  timestamp: number
  authors: Author[]
}

const PostMeta: FC<PostMetaProps> = ({ title, authors }: PostMetaProps) => {
  return (
    <>
      <Text
        h2
        className="font-medium"
      >{title}</Text>
      <Avatar.Group className="pl-3 inline-flex pr-2">
        {authors.map((author) => (
          <Avatar
            src={author.avatar}
            alt={author.name}
            title={author.name}
            key={authors.indexOf(author)}
            stacked
          />
        ))}
      </Avatar.Group>
      <Text
        small
        className="uppercase text-gray-500"
      >Posted 1 year ago</Text>
    </>
  )
}

export default PostMeta
