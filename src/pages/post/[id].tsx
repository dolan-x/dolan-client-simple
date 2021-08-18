import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { Card } from '@geist-ui/react'

import { Post } from '@/lib/types'
import usePost from '@/lib/usePost'
import { getAPILink } from '@/utils'

import Page from '@/components/Page'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostMeta from '@/components/PostMeta'

type PostProps = {
  id: number
  data: Post
}

const PostPage: FC<PostProps> = ({ id, data }: PostProps) => {
  const { post } = usePost(id, data)

  return (
    <>
      <Head>
        <title>{post.title}_Test</title>
      </Head>
      <Header />
      <Page>
        <Card>
          <article>
            <PostMeta
              title={post.title}
              timestamp={post.timestamp}
              authors={post.authors}
            />
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>
        </Card>
      </Page>
      <Footer />
    </>
  )
}

export default PostPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  const { data }: { data: Post } = await axios.get(getAPILink(`posts/${id}`))

  return {
    props: {
      id: Number(id),
      data
    }
  }
}
