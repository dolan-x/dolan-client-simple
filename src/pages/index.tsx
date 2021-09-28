import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { EyeOffIcon } from '@heroicons/react/outline'

import { Post } from '@/lib/types'
import { usePosts } from '@/lib/hooks'

import Widget from '@/components/Widgets'
import PostCardWidget from '@/components/Widgets/PostCardWidget'
import PostCardSkeleton from '@/components/Widgets/PostCard.skeleton'
import Layout from '@/components/Layouts'

// Show at bottom
const Nothing: FC = () => {
  const { t } = useTranslation('home')

  return (
    <Widget className="w-full my-4">
      <Widget.Content className="flex justify-center">
        <EyeOffIcon className="w-6 h-6 mr-3" />
        {t('reached-bottom')}
      </Widget.Content>
    </Widget>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IndexPage: FC = () => {
  /* Post List */
  const data = usePosts()
  const posts = data.posts ? [...data.posts] : []
  const renderPostList = () => {
    if (data.isLoading) return <PostCardSkeleton />
    return (
      <>
        {posts.map((post: Post) => {
          const {
            title,
            excerpt,
            id,
            authors,
            postMetas
          } = post

          if (post.type === 'post') {
            return <PostCardWidget
              key={post.id}
              title={title.rendered}
              excerpt={excerpt.rendered}
              postID={id}
              authors={authors}
              postMetas={postMetas}
            />
          }
          return null
        })}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Test_Home</title>
      </Head>
      <Layout>
        <InfiniteScroll
          dataLength={posts.length}
          next={() => console.log('next')}
          hasMore={false}
          loader={<PostCardSkeleton />}
          endMessage={<Nothing />}
        >
          {renderPostList()}
        </InfiniteScroll>
      </Layout>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home', 'widgets', 'common']))
    }
  }
}
