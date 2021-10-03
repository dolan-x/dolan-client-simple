import { FC } from 'react'
import { GetServerSideProps } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Breadcrumbs } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PageSkeleton from '@/components/Widgets/Page.skeleton'
import Post from '@/components/Utils/Post'
import Layout from '@/components/Layouts'

import { useCategory } from '@/lib/hooks'
import { getCategoryLink } from '@/utils'
import { CategorySlug } from '@/lib/types'

const CategoryPage: FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const { category, isLoading, isError } = useCategory(slug as CategorySlug)
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
                  <NextLink href={getCategoryLink()}>
                    <Breadcrumbs.Item nextLink>{t('categories')}</Breadcrumbs.Item>
                  </NextLink>
                  <Breadcrumbs.Item>{category.name}</Breadcrumbs.Item>
                </Breadcrumbs>
              </Widget>
              {category.posts.map((id) => (
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

export default CategoryPage

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['widgets', 'common']))
    }
  }
}
