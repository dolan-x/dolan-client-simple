import { FC } from 'react'
import dynamic from 'next/dynamic'

import { useTags } from '@/lib/hooks'

const TagCloudWidget = dynamic(() => import('@/components/Widgets/TagCloudWidget'))

const Aside: FC = () => {
  const { tags, isLoading, isError } = useTags()

  return (
    <aside className="flex flex-col lg:order-1 w-full lg:w-aside">
      {isLoading
        ? (
            null
          )
        : (
          <>
            <TagCloudWidget tags={tags} />
            <TagCloudWidget tags={tags} />
          </>
          )}
    </aside>
  )
}

Aside.displayName = 'DolanSideBar'
export default Aside
