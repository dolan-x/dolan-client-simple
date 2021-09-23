import {
  FC,
  ReactNode
} from 'react'
import dynamic from 'next/dynamic'

import {
  useCategories,
  useTags
} from '@/lib/hooks'
import { wrapWidget } from '@/utils'

const CategoriesWidget = dynamic(() => import('@/components/Widgets/CategoriesWidget'))
const TagCloudWidget = dynamic(() => import('@/components/Widgets/TagCloudWidget'))

const Aside: FC = () => {
  const { categories, isLoading: isCategoriesLoading, isError: isCategoriesError } = useCategories()
  const { tags, isLoading: isTagsLoading, isError: isTagsError } = useTags()

  return (
    <aside className="flex flex-col lg:order-1 w-full lg:w-aside">
      {wrapWidget(isCategoriesLoading, <CategoriesWidget categories={categories} />)}
      {wrapWidget(isTagsLoading, <TagCloudWidget tags={tags} />)}
    </aside>
  )
}

Aside.displayName = 'DolanSideBar'
export default Aside
