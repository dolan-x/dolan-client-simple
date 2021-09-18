import { FC, useState, useEffect } from 'react'
import NextLink from 'next/link'
import { User, Link } from '@geist-ui/react'

const Header: FC = () => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)
  useEffect(() => setShowAfterRender(true), [])

  if (!showAfterRender) return null
  return (
    <header className="fixed top-0 h-auto w-full lg:py-4 lg:px-5 lg:backdrop-filter lg:backdrop-saturate-150 lg:backdrop-blur-sm lg:bg-header-background py-2 px-1 shadow-sm bg-white z-9999">
      <div>
        <NextLink
          href="/"
          passHref
        >
          <Link>
            <User
              src="https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-680a77c1b5c63dc65381e38bb3191cb4.jpeg"
              name="Ray"
            />
          </Link>
        </NextLink>
      </div>
    </header>
  )
}

Header.displayName = 'DolanHeaderLayout'
export default Header