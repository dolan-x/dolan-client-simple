import type { FC } from 'react'
import NextLink from 'next/link'
import { Card, Text, Link, Button, Avatar } from '@geist-ui/react'
import { ArrowRight } from '@geist-ui/react-icons'

import { Post } from '@/lib/types'
import { getPostLink } from '@/utils'

const Thumbnail = ({
  id,
  thumbnail,
  title
}: {
  id: number
  thumbnail: string
  title: string
}) => (
  <NextLink
    href={getPostLink(id)}
  >
    <div className="-mx-card -mt-card mb-5 w-thumbnail">
      <Link className="block p-0 overflow-hidden h-72">
        <img
          src={thumbnail}
          alt={title}
          className="inline transition duration-1000 ease-in-out transform hover:scale-110"
        />
      </Link>
    </div>
  </NextLink>
)

const PostCard: FC<Post> = ({
  title,
  info,
  id,
  authors,
  thumbnail
}: Post) => {
  return (
    <div className="w-full px-0 pt-4 first:pt-0">
      <Card>
        {thumbnail && <Thumbnail {...{ id, thumbnail, title }} />}
        <NextLink
          href={getPostLink(id)}
          passHref
        >
          <Link>
            <Text h4>{title}</Text>
          </Link>
        </NextLink>
        <p dangerouslySetInnerHTML={{ __html: info }} />

        {/* Meta */}
        <Card.Footer>
          <div className="flex w-full flex-wrap justify-between items-center">
            <Avatar.Group className="pl-3">
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
            <Button
              type="success"

              ghost
              auto
            >
              <NextLink
                href={getPostLink(id)}
                passHref
              >
                <Link className="items-center">
                  Read More
                  <ArrowRight className="w-6 h-6 -mr-3" />
                </Link>
              </NextLink>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default PostCard
