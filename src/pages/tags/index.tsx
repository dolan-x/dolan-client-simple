import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageSkeleton from '@/components/Widgets/Page.skeleton'
import TagCloudWidget from '@/components/Widgets/TagCloudWidget'
import Layout from '@/components/Layouts'
import Page from '@/components/Layouts/Page'

import { useTags } from '@/lib/hooks'

const TagsPage: FC = () => {
  const { tags, isLoading, isError } = useTags()

  return (
    <>
      <Head>
        <title>Tags_Test</title>
      </Head>
      <Layout>
        <Page>
          {isLoading
            ? (
              <PageSkeleton />
              )
            : (
              <TagCloudWidget tags={tags} />
              )}
        </Page>
      </Layout>
    </>
  )
}

export default TagsPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['tags']))
    }
  }
}
