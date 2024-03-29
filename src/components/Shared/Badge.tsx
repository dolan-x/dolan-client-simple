import {
  FC,
  PropsWithChildren,
  HTMLAttributes
} from 'react'
import NextLink from 'next/link'
import { Link } from '@geist-ui/react'

type Props = {
  href?: string
  background?: boolean
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
type BadgeProps = Props & NativeAttrs
type BadgePropsWithChildren = PropsWithChildren<BadgeProps>
const Badge: FC<BadgePropsWithChildren> = ({
  href,
  background = true,
  children,
  className = ''
}) => {
  const getClasses = (): string => `inline-flex rounded transition px-2 py-1 m-2 ${background ? 'bg-gray-100 hover:bg-gray-200' : ''} ${className}`

  return (
    <>
      {href
        ? (
          <NextLink
            href={href}
            passHref
          >
            <Link className="group">
              <div className={`${getClasses()} group-hover:text-yellow-500`}>
                {children}
              </div>
            </Link>
          </NextLink>
          )
        : (
          <div className={getClasses()}>
            {children}
          </div>
          )
      }
    </>
  )
}

export default Badge
