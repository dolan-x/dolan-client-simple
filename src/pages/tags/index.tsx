import { FC } from 'react'
import Head from 'next/head'

import PageSkeleton from '@/components/Widgets/Page.skeleton'
import TagCloudWidget from '@/components/Widgets/TagCloudWidget'
import Layout from '@/components/Layouts'

import { useTags } from '@/lib/hooks'

const TagsPage: FC = () => {
  const {
    tags,
    isLoading,
    isError
  } = useTags()

  return (
    <>
      <Head>
        <title>Tags_Test</title>
      </Head>
      <Layout>
        {isLoading
          ? (
            <PageSkeleton />
            )
          : (
            <TagCloudWidget tags={tags} />
            )}
      </Layout>
    </>
  )
}

export default TagsPage
