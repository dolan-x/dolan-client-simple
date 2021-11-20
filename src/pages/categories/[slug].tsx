import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Breadcrumbs } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PageSkeleton from '@/components/Widgets/Page.skeleton'
import Post from '@/components/Utils/Post'
import Layout from '@/components/Layouts'

import { useCategory } from '@/lib/hooks'
import { getCategoryLink } from '@/utils'
import { CategorySlug } from '@/lib/types'
import toast from '@/lib/toast'

const CategoryPage: FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const {
    category,
    isLoading,
    isError
  } = useCategory(slug as CategorySlug)
  const { t } = useTranslation('widgets')
  if (isError) {
    toast('error', {
      text: 'Error loading categories'
    })
  }

  return (
    <>
      <Head>
        <title>{slug}_Test</title>
      </Head>
      <Layout>
        {isLoading || isError
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
