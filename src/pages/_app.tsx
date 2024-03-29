import { NextPage } from 'next'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SWRConfig } from 'swr'
import {
  GeistProvider,
  CssBaseline
} from '@geist-ui/react'
import 'windi.css'

import BackToTop from '@/components/BackToTop'
import { fetcher } from '@/lib/fetcher'

import 'inter-ui/inter.css'
import '@/styles/global.css'

import 'intl-pluralrules'
import toast from '@/lib/toast'

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <>
      <GeistProvider>
        <SWRConfig value={{ fetcher }}>
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

export default MyApp
