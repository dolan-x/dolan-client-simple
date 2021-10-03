import { FC } from 'react'
import { GetServerSideProps } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Breadcrumbs } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import Post from '@/components/Utils/Post'
import PageSkeleton from '@/components/Widgets/Page.skeleton'
import Layout from '@/components/Layouts'

import { useTag } from '@/lib/hooks'
import { getTagLink } from '@/utils'
import { TagSlug } from '@/lib/types'

const TagPage: FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const { tag, isLoading, isError } = useTag(slug as TagSlug)
  const { t } = useTranslation('widgets')

  return (
    <>
      <Head>
        <title>{slug}_Test</title>
      </Head>
      <Layout>
        {isLoading
          ? (
            <PageSkeleton />
            )
          : (
            <>
              <Widget>
                <Breadcrumbs>
                  <NextLink href={getTagLink()}>
                    <Breadcrumbs.Item nextLink>{t('tags')}</Breadcrumbs.Item>
                  </NextLink>
                  <Breadcrumbs.Item>{slug}</Breadcrumbs.Item>
                </Breadcrumbs>
              </Widget>
              {tag.posts.map((id) => (
                <Post
                  id={id}
                  key={id}
                />
              ))}
            </>
            )
        }
      </Layout>
    </>
  )
}

export default TagPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['widgets', 'common']))
    }
  }
}
