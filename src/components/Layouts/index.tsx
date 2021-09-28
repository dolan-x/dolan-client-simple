import { FC } from 'react'

import Header from './Header'
import Footer from './Footer'
import Aside from '@/components/Aside'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="m-4 pt-24">
        <div className="flex mx-auto max-w-5xl flex-wrap lg:flex-nowrap">
          <div className="float-left w-full lg:w-main pr-0 lg:pr-4">
            {children}
          </div>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.displayName = 'DolanDefaultLayout'
export default Layout
