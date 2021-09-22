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
import PostCardSkeleton from '@/components/Widgets/PostCard.skeleton'
import PostCard from '@/components/Widgets/PostCardWidget'
import Layout from '@/components/Layouts'
import Page from '@/components/Layouts/Page'

import { useCategory, usePost } from '@/lib/hooks'
import { getCategoryLink } from '@/utils'
import { CategorySlug, PostID } from '@/lib/types'

const Post: FC<{ id: PostID }> = ({ id }) => {
  const {
    post,
    isLoading,
    isError
  } = usePost(id)

  if (isLoading) return <PostCardSkeleton />

  const {
    title,
    excerpt,
    id: postID,
    authors,
    postMetas
  } = post
  return (
    <PostCard
      title={title.rendered}
      excerpt={excerpt.rendered}
      postID={postID}
      authors={authors}
      postMetas={postMetas}
    />
  )
}

const CategoryPage: FC = () => {
  const router = useRouter()
  const { name } = router.query
  const { category, isLoading, isError } = useCategory(name as CategorySlug)
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['categories', 'common']))
    }
  }
}
