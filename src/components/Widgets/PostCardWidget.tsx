import { FC } from 'react'
import NextLink from 'next/link'
import { useTranslation } from 'react-i18next'
import { Text, Link, Button, Avatar } from '@geist-ui/react'
import { ArrowRight } from '@geist-ui/react-icons'

import Thumbnail from '@/components/Thumbnail'
import Widget from '.'

import { Post } from '@/lib/types'
import { getPostLink } from '@/utils'

type PostProps = Post
const PostCard: FC<PostProps> = ({
  title,
  info,
  id,
  authors,
  thumbnail
}: PostProps) => {
  const { t } = useTranslation('common')

  return (
    <Widget className="w-full px-0 ">
      {/* Thumbnail */}
      {thumbnail && (
        <NextLink
          href={getPostLink(id)}
          passHref
        >
          <Link className="w-full">
            <Thumbnail
              hoverable
              {...{ title, thumbnail, id }}
            />
          </Link>
        </NextLink>
      )}
      {/* Title */}
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
      <Widget.Footer>
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
          {/* Read More */}
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
                {t('read-more')}
                <ArrowRight className="w-6 h-6 -mr-3" />
              </Link>
            </NextLink>
          </Button>
        </div>
      </Widget.Footer>
    </Widget>
  )
}

PostCard.displayName = 'DolanPostCardWidget'
export default PostCard
