import { FC, HTMLAttributes } from 'react'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'

interface Props {
  name: string
  count: number
  href: string
  backgroundColor: string
}
type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
type TagProps = Props & NativeAttrs

const Tag: FC<TagProps> = ({ name, href, count, backgroundColor, className = '', ...props }: TagProps) => {
  const getClasses = () => 'rounded text-xs inline-block px-2 py-1'

  return (
    <div
      className={`inline-flex m-2 ${className}`}
      {...props}
    >
      <NextLink
        href={href}
        passHref
      >
        <Link>
          <div
            className={`${getClasses()} rounded-r-none`}
            style={{ backgroundColor }}
          >
            {name}
          </div>
          <div
            className={`${getClasses()} rounded-l-none bg-gray-100`}
          >
            {count}
          </div>
        </Link>
      </NextLink>
    </div>
  )
}

Tag.displayName = 'DolanTag'
export default Tag
