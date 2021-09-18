import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Breadcrumbs } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PageSkeleton from '@/components/Widgets/PageSkeleton'
import PostCardSkeleton from '@/components/Widgets/PostCardSkeleton'
import PostCard from '@/components/Widgets/PostCardWidget'
import Layout from '@/components/Layouts'
import Page from '@/components/Layouts/Page'

import { useCategory, usePost } from '@/lib/hooks'
import { getCategoryLink } from '@/utils'
import { CategoryName, PostID } from '@/lib/types'

const Post: FC<{ id: PostID }> = ({ id }) => {
  const { post, isLoading, isError } = usePost(id)

  if (isLoading) return <PostCardSkeleton />
  return (
    <PostCard {...post} />
  )
}

const CategoryPage: FC = () => {
  const router = useRouter()
  const { name } = router.query
  const { category, isLoading, isError } = useCategory(name as CategoryName)
  const { t } = useTranslation('categories')

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
        </Page>
      </Layout>
    </>
  )
}

export default CategoryPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['categories', 'common']))
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
