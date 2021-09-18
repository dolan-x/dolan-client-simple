import { FC } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.displayName = 'DolanDefaultLayout'
export default Layout
