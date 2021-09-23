import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageSkeleton from '@/components/Widgets/Page.skeleton'
import CategoriesWidget from '@/components/Widgets/CategoriesWidget'
import Layout from '@/components/Layouts'

import { useCategories } from '@/lib/hooks'

const CategoriesPage: FC = () => {
  const { categories, isLoading, isError } = useCategories()

  return (
    <>
      <Head>
        <title>Categories_Test</title>
      </Head>
      <Layout>
          {isLoading
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['widgets']))
    }
  }
}
