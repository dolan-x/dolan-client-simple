import { FC } from 'react'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'

import { getCategoryLink } from '@/utils'

type CategoryItemProps = {
  name: string
  count: number
}

const CategoryItem: FC<CategoryItemProps> = ({
  name,
  count
}) => {
  return (
    <div className="p-2 rounded-sm hover:bg-gray-100 transition">
      <NextLink
        href={getCategoryLink(name)}
        passHref
      >
        <Link className="!flex !items-center !w-full justify-between">
          <div className="break-all pr-3">
            {name}
          </div>
          <div className="rounded bg-gray-100 px-2 py-1">
            {count}
          </div>
        </Link>
      </NextLink>
    </div>
  )
}

export default CategoryItem
