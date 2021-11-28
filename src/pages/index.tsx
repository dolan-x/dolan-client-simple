import { NextPage } from 'next'
import {
  FC,
  ReactNode
} from 'react'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'
import useTranslation from 'next-translate/useTranslation'
import { EyeOffIcon } from '@heroicons/react/outline'

import { Post } from '@/lib/types'
import { usePosts } from '@/lib/hooks'
import toast from '@/lib/toast'

import Widget from '@/components/Widgets'
import PostCardWidget from '@/components/Widgets/PostCardWidget'
import PostCardSkeleton from '@/components/Widgets/PostCardWidget/PostCard.skeleton'
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
const IndexPage: NextPage = () => {
  /* Post List */
  const data = usePosts()
  const posts = data.posts || []
  const renderPostList = (): ReactNode => {
    if (data.isLoading || data.isError) {
      return (
        <>
          {Array.from({ length: 4 }).map((_, i) => <PostCardSkeleton key={i} />)}
        </>
      )
    }
    if (data.isError) {
      toast('error', {
        text: 'Error loading posts'
      })
    }
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
          return <PostCardWidget
            key={post.id}
            title={title.rendered}
            excerpt={excerpt.rendered}
            postID={id}
            authors={authors}
            postMetas={postMetas}
          />
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
