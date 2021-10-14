import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Text } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import Layout from '@/components/Layouts'

type ErrorPageProps = {
  statusCode: number
}
const ErrorPage: FC<ErrorPageProps> = ({ statusCode }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Layout>
        <Widget>
          <div className="text-center m-10">
            <Text className="text-9xl">
              {statusCode}
            </Text>
            <Text
              h2
              className="font-light"
            >
              {t(String(statusCode))}
            </Text>
          </div>
        </Widget>
      </Layout>
    </>
  )
}

export default ErrorPage
