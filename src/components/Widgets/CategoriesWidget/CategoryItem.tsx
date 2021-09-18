import { FC } from 'react'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'

import { getCategoryLink } from '@/utils'

type CategoryItemProps = {
  name: string
}

const CategoryItem: FC<CategoryItemProps> = ({ name }: CategoryItemProps) => {
  return (
    <div className="p-2 rounded-sm hover:bg-gray-100 transition">
      <NextLink
        href={getCategoryLink(name)}
        passHref
      >
        <Link className="w-full">
          {name}
        </Link>
      </NextLink>
    </div>
  )
}

export default CategoryItem
