import { FC } from 'react'
import { FolderOpenIcon } from '@heroicons/react/outline'

import Badge from '@/components/Common/Badge'

import { getCategoryLink } from '@/utils'

type CategoryProps = {
  category: string
}
const Category: FC<CategoryProps> = ({ category }: CategoryProps) => {
  return (
    <div>
      <Badge
        href={getCategoryLink(category)}
        background={false}
      >
        <div className="flex items-center mr-1">
          <FolderOpenIcon className="w-5 h-5 text-green-300" />
        </div>
        <div>
          {category}
        </div>
      </Badge>
    </div>
  )
}

Category.displayName = 'DolanTagsForPost'
export default Category
