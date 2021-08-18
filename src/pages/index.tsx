import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Head from 'next/head'
import { Card } from '@geist-ui/react'
import { EyeOff } from '@geist-ui/react-icons'

import { Post } from '@/lib/types'
import usePosts from '@/lib/usePosts'

import Header from '@/components/Header'
import Home from '@/components/Home'
import PostCard from '@/components/PostCard'
import PostSkeleton from '@/components/PostSkeleton'
import Footer from '@/components/Footer'

type ContentProps = {
  posts: Post[],
  isLoading: boolean,
  isError: boolean
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Content: FC<ContentProps> = ({ posts, isLoading, isError }: ContentProps) => {
  if (isLoading) return <PostSkeleton />
  return (
    <>
      {posts.map((post: Post) => {
        if (post.type === 'post') {
          return <PostCard
            key={post.id}
            {...post}
          />
        }
        return null
      })}
    </>
  )
}

const EndCard: FC = () => {
  return (
    <div className="w-full pt-4">
      <Card>
        <Card.Content className="flex justify-center">
          <EyeOff className="w-6 h-6 mr-3" />
          {'OOPS \'_\' There\'s Nothing'}
        </Card.Content>
      </Card>
    </div>

  )
}
type IndexProps = {

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IndexPage: FC<IndexProps> = (props: IndexProps) => {
  const data = usePosts()
  const posts = data.posts ? [].concat(...data.posts) : []

  return (
    <>
      <Head>
        <title>Test_Home</title>
      </Head>
      <Header />
      <Home>
        <div className="pt-24" />
        <InfiniteScroll
          dataLength={posts.length}
          next={() => console.log('next')}
          hasMore={false}
          loader={<PostSkeleton />}
          endMessage={<EndCard />}
        >
          <Content {...data} />
        </InfiniteScroll>
      </Home>
      <Footer />
    </>
  )
}

export default IndexPage
