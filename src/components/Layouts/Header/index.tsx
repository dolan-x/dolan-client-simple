import {
  FC,
  useState,
  useEffect
} from 'react'
import NextLink from 'next/link'
import {
  User,
  Link
} from '@geist-ui/react'

import NavItem from './NavItem'
import LocaleSwitcher from './LocaleSwitcher'
import UserInfo from './UserInfo'

const Header: FC = () => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)
  useEffect(() => setShowAfterRender(true), [])

  if (!showAfterRender) return null
  return (
    <header>
      <div className="flex justify-between fixed top-0 h-auto w-full py-2 px-1 mx-auto max-w-main shadow-sm bg-white z-9999 lg:(py-4 px-5 backdrop-filter backdrop-saturate-150 backdrop-blur-sm bg-header-background)">
        {/* Nav Start */}
        <NextLink
          href="/"
          passHref
        >
          <Link className="!items-center">
            <User
              src="https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-680a77c1b5c63dc65381e38bb3191cb4.jpeg"
              name="Ray"
            />
          </Link>
        </NextLink>
        {/* Nav End */}
        <div className="flex items-center">
          <NavItem href="/categories">
            Categories
          </NavItem>
          <NavItem href="/tags">
            Tags
          </NavItem>
          <LocaleSwitcher />
          <UserInfo />
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'DolanHeaderLayout'
export default Header
