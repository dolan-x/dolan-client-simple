import { FC } from 'react'
import dynamic from 'next/dynamic'

import AsideWidgetSkeleton from '@/components/Aside/AsideWidget.skeleton'

import { wrapLoadingWidget } from '@/utils'
import { WidgetMeta } from '@/lib/types'
import {
  useTags,
  useCategories
} from '@/lib/hooks'
import toast from '@/lib/toast'

const TagCloudWidget = dynamic(async () => await import('@/components/Widgets/TagCloudWidget'))
const TagsWidgetContainer: FC = () => {
  const {
    tags,
    isLoading,
    isError
  } = useTags()
  if (isError) {
    toast('error', {
      text: 'Error loading tags'
    })
    return <AsideWidgetSkeleton />
  }
  return (
    <>
      {wrapLoadingWidget(isLoading, <TagCloudWidget tags={tags} />, <AsideWidgetSkeleton />)}
    </>
  )
}

const CategoriesWidget = dynamic(async () => await import('@/components/Widgets/CategoriesWidget'))
const CategoriesWidgetContainer: FC = () => {
  const {
    categories,
    isLoading,
    isError
  } = useCategories()
  if (isError) {
    toast('error', {
      text: 'Error loading categories'
    })
    return <AsideWidgetSkeleton />
  }
  return (
    <>
      {wrapLoadingWidget(isLoading, <CategoriesWidget categories={categories} />, <AsideWidgetSkeleton />)}
    </>
  )
}

const widgetMetas: WidgetMeta[] = [
  {
    name: 'DolanTagsWidget',
    id: 'org.dolan.widgets.tags',
    description: 'Tags Widget',
    component: <TagsWidgetContainer />
  },
  {
    name: 'DolanCategoriesWidget',
    id: 'org.dolan.widgets.categories',
    description: 'Categories Widget',
    component: <CategoriesWidgetContainer />
  }
]

export default widgetMetas
