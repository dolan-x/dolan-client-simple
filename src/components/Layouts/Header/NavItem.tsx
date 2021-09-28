import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { Button, Link } from '@geist-ui/react'

interface NavItemProps {
  href: string
}
type NavItemPropsWithChildren = PropsWithChildren<NavItemProps>
const NavItem: FC<NavItemPropsWithChildren> = ({ href, children }: NavItemPropsWithChildren) => {
  return (
    <NextLink
      href={href}
      passHref
    >
      <Link>
        <Button
          className="min-w-0 hover:bg-gray-100"
          type="abort"
        >
          {children}
        </Button>
      </Link>
    </NextLink>
  )
}

NavItem.displayName = 'DolanNavItem'
export default NavItem
