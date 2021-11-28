import { NextPage } from 'next'
import Head from 'next/head'

import PageSkeleton from '@/components/Widgets/Page.skeleton'
import CategoriesWidget from '@/components/Widgets/CategoriesWidget'
import Layout from '@/components/Layouts'

import { useCategories } from '@/lib/hooks'

const CategoriesPage: NextPage = () => {
  const {
    categories,
    isLoading,
    isError
  } = useCategories()

  return (
    <>
      <Head>
        <title>Categories_Test</title>
      </Head>
      <Layout>
        {isLoading || isError
          ? (
            <PageSkeleton />
            )
          : (
            <CategoriesWidget categories={categories} />
            )}
      </Layout>
    </>
  )
}

export default CategoriesPage
