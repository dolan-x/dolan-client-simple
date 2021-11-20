import { NextPage } from 'next'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import {
  If,
  Then,
  Else
} from 'react-if'
import 'react-toastify/dist/ReactToastify.css'
import { SWRConfig } from 'swr'
import {
  GeistProvider,
  CssBaseline
} from '@geist-ui/react'
import 'windi.css'

import BackToTop from '@/components/BackToTop'
import { fetcher } from '@/lib/fetcher'
import { checkValidEnvConfig } from '@/utils'

import 'inter-ui/inter.css'
import '@/styles/global.css'

import 'intl-pluralrules'
import toast from '@/lib/toast'

type ExtendAppType = {
  isValid: boolean
  missingSettings: string[]
}
const MyApp: NextPage<AppProps, ExtendAppType> = ({
  Component,
  pageProps,
  isValid,
  missingSettings
}: AppProps & ExtendAppType) => {
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
            <If condition={isValid}>
              <Then>
                <Component {...pageProps} />
              </Then>
              <Else>
                <div>
                  Config {missingSettings.join(',')} is NOT set
                </div>
              </Else>
            </If>
          </div>
        </SWRConfig>
        <ToastContainer />
      </GeistProvider>
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const {
    isValid,
    missingSettings
  } = checkValidEnvConfig()
  if (!isValid) {
    toast('error', {
      text: `Config ${missingSettings.join(',')} is not set in .env`
    })
  }
  return {
    isValid,
    missingSettings
  }
}

export default MyApp
