import { FC } from 'react'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  Text,
  Button
} from '@geist-ui/react'

import Widget from '@/components/Widgets'
import Layout from '@/components/Layouts'

const FourOFourPage: FC = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Layout>
        <Widget>
          <div className="text-center m-10">
            <Text className="text-9xl">
              404
            </Text>
            <Text
              h2
              className="font-light"
            >
              {t('404')}
            </Text>
            <NextLink href="/">
              <Button
                className="mt-20"
                type="error"
                ghost
              >
                {t('back-to-home')}
              </Button>
            </NextLink>
          </div>
        </Widget>
      </Layout>
    </>
  )
}

export default FourOFourPage
