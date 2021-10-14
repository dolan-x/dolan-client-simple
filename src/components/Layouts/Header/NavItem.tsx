import {
  FC,
  ReactNode,
  PropsWithChildren
} from 'react'
import NextLink from 'next/link'
import {
  Button,
  Link,
  ButtonProps
} from '@geist-ui/react'

type NavItemProps = {
  href?: string
}
type NavItemPropsWithChildren = ButtonProps & PropsWithChildren<NavItemProps>
const NavItem: FC<NavItemPropsWithChildren> = ({
  href,
  className,
  children,
  ...props
}) => {
  const renderNavItem = (): ReactNode => (
    <Button
      className={`!min-w-0 !hover:bg-gray-100 !min-w-0 !flex items-center ${className}`}
      type="abort"
      {...props}
    >
      {children}
    </Button>
  )

  if (href) {
    return (
      <NextLink
        href={href}
        passHref
      >
        <Link>
          {renderNavItem()}
        </Link>
      </NextLink>
    )
  }
  return (
    <>
      {renderNavItem()}
    </>
  )
}

NavItem.displayName = 'DolanNavItem'
export default NavItem
