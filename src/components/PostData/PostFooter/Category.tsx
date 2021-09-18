import { FC } from 'react'
import { Folder } from '@geist-ui/react-icons'

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
        <Folder className="transform scale-75 text-green-300" />
        {category}
      </Badge>
    </div>
  )
}

Category.displayName = 'DolanTagsForPost'
export default Category
