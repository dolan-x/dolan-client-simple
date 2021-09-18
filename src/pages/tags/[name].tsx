import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Breadcrumbs } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PageSkeleton from '@/components/Widgets/PageSkeleton'
import Layout from '@/components/Layouts'
import Page from '@/components/Layouts/Page'

import { useTag } from '@/lib/hooks'
import { getTagLink } from '@/utils'
import { TagName } from '@/lib/types'

const TagPage: FC = () => {
  const router = useRouter()
  const { name } = router.query
  const { tag, isLoading, isError } = useTag(name as TagName)
  const { t } = useTranslation('tags')

  return (
    <>
      <Head>
        <title>{name}_Test</title>
      </Head>
      <Layout>
        <Page>
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
                    <Breadcrumbs.Item>{name}</Breadcrumbs.Item>
                  </Breadcrumbs>
                </Widget>
                <Widget>
                  name: {tag.name}
                  <br />
                  count: {tag.count}
                </Widget>
              </>
              )
        }
        </Page>
      </Layout>
    </>
  )
}

export default TagPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['tags']))
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}