import {
  NextPage,
  GetStaticProps
} from 'next'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { SWRConfig } from 'swr'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import BackToTop from '@/components/BackToTop'
import { fetcher } from '@/lib/fetcher'

import 'inter-ui/inter.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GeistProvider>
        <SWRConfig value={{ fetcher: fetcher }}>
          <CssBaseline />
          <NextNProgress
            color="#000000"
            height={2}
          />
          <BackToTop />
          <div className="bg-body-color min-h-screen">
            <Component {...pageProps} />
          </div>
        </SWRConfig>
        <ToastContainer />
      </GeistProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
