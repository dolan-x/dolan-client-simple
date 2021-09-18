import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { EyeOff } from '@geist-ui/react-icons'

import { Post } from '@/lib/types'
import { usePosts, useSiteProfile } from '@/lib/hooks'

import SiteProfile from '@/components/SiteProfile'
import Widget from '@/components/Widgets'
import PostCardWidget from '@/components/Widgets/PostCardWidget'
import PostCardSkeleton from '@/components/Widgets/PostCardSkeleton'
import SiteProfileSkeleton from '@/components/Widgets/SiteProfileSkeleton'
import Layout from '@/components/Layouts'
import Home from '@/components/Layouts/Home'

// Show at bottom
const Nothing: FC = () => {
  const { t } = useTranslation('home')

  return (
    <Widget className="w-full mt-4">
      <Widget.Content className="flex justify-center">
        <EyeOff className="w-6 h-6 mr-3" />
        {t('reached-bottom')}
      </Widget.Content>
    </Widget>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IndexPage: FC = () => {
  /* Post List */
  const data = usePosts()
  const posts = data.posts ? [].concat(...data.posts) : []
  const renderPostList = () => {
    if (data.isLoading) return <PostCardSkeleton />
    return (
      <>
        {posts.map((post: Post) => {
          if (post.type === 'post') {
            return <PostCardWidget
              key={post.id}
              {...post}
            />
          }
          return null
        })}
      </>
    )
  }
  /* Site Profile */
  const { siteProfile, isLoading: isProfileLoading, isError: isProfileError } = useSiteProfile()
  const renderSiteProfile = () => {
    if (isProfileLoading) return <SiteProfileSkeleton />
    return (
      <SiteProfile {...siteProfile} />
    )
  }

  return (
    <>
      <Head>
        <title>Test_Home</title>
      </Head>
      <Layout>
        <Home>
          {renderSiteProfile()}
          <InfiniteScroll
            dataLength={posts.length}
            next={() => console.log('next')}
            hasMore={false}
            loader={<PostCardSkeleton />}
            endMessage={<Nothing />}
          >
            {renderPostList()}
          </InfiniteScroll>
        </Home>
      </Layout>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common']))
    }
  }
}
