import { FC } from 'react'
import { Text } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PostMeta from '@/components/PostData/PostMeta'
import PostFooter from '@/components/PostData/PostFooter'
import HeadingImage from '@/components/HeadingImage'

import { Author } from '@/lib/types'

type ArticleProps = {
  headingImage?: string
  title: string
  timestamp: number
  authors: Author[]
  content: string
  tags: string[]
  category: string
  pageType?: 'post' | 'page'
}
const Article: FC<ArticleProps> = ({
  headingImage,
  title,
  timestamp,
  authors,
  content,
  tags,
  category,
  pageType = 'post'
}) => {
  const authorNames = authors.map((author) => author.name)

  return (
    <>
      {headingImage && <Widget>
        <HeadingImage
          className="-mb-card"
          title={title}
          headingImage={headingImage}
          hoverable={false}
          roundedBottom
        />
      </Widget>}
      <PostMeta
        authorNames={authorNames}
        timestamp={timestamp}
      />
      <Widget>
        <div className="text-center">
          <Text
            className="font-light"
            h1
          >
            {title}
          </Text>
        </div>
        <article>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <PostFooter
          tags={tags}
          category={category}
        />
      </Widget>
    </>
  )
}

Article.displayName = 'DolanArticleLayout'
export default Article
