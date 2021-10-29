import {
  FC,
  useMemo
} from 'react'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  Text,
  Link,
  Button,
  Avatar
} from '@geist-ui/react'
import { ArrowRightIcon } from '@heroicons/react/outline'

import HeadingImage from '@/components/HeadingImage'
import Widget from '..'

import { Post } from '@/lib/types'
import { getPostLink } from '@/utils'

type PostCardWidgetProps = {
  title: string
  excerpt: string
  postID: string
  authors: Post['authors']
  postMetas: Post['postMetas']
}
const PostCardWidget: FC<PostCardWidgetProps> = ({
  title,
  excerpt,
  postID,
  authors,
  postMetas
}) => {
  const { t } = useTranslation('common')
  const link = useMemo(() => getPostLink(postID), [postID])

  return (
    <Widget className="w-full px-0">
      {/* Heading Image */}
      {postMetas.headingImage && (
        <NextLink
          href={link}
          passHref
        >
          <Link className="!w-full">
            <HeadingImage
              hoverable
              title={title}
              headingImage={postMetas.headingImage}
            />
          </Link>
        </NextLink>
      )}
      {/* Title */}
      <NextLink
        href={link}
        passHref
      >
        <Link>
          <Text h4>{title}</Text>
        </Link>
      </NextLink>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />

      {/* Meta */}
      <Widget.Footer>
        <div className="flex w-full flex-wrap justify-between items-center">
          <Avatar.Group className="!pl-3">
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
          <NextLink
            href={link}
            passHref
          >
            <Link
              className="!items-center !text-blue-300 !hover:text-yellow-300"
              block
            >
              {t('read-more')}
              <ArrowRightIcon className="w-5 h-5 pl-1" />
            </Link>
          </NextLink>
        </div>
      </Widget.Footer>
    </Widget>
  )
}

PostCardWidget.displayName = 'DolanPostCardWidget'
export default PostCardWidget
