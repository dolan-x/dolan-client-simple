import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'

import Comments from '@/components/Widgets/CommentsWidget'
import Layout from '@/components/Layouts'
import Page from '@/components/Layouts/Page'
import Article from '@/components/Layouts/Article'

import { Post, PostID } from '@/lib/types'
import { usePost } from '@/lib/hooks'
import { getAPILink } from '@/utils'

type PostPageProps = {
  id: PostID
  data: Post
}

const PostPage: FC<PostPageProps> = ({ id, data }: PostPageProps) => {
  const { post } = usePost(id, data)
  const { title } = post

  return (
    <>
      <Head>
        <title>{title}_Test</title>
      </Head>
      <Layout>
        <Page>
          <Article {...post} />
          <Comments
            className="mt-4"
            type="waline"
          />
        </Page>
      </Layout>
    </>
  )
}

export default PostPage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  const { data }: { data: Post } = await axios.get(getAPILink(`posts/${id}`))

  return {
    props: {
      id,
      data
    }
  }
}