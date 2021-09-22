import { FC, useState, useEffect } from 'react'
import ScrollToTop from 'react-scroll-up'
import { Card } from '@geist-ui/react'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'

const BackToTop: FC = () => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)
  useEffect(() => setShowAfterRender(true), [])

  if (!showAfterRender) return null
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        zIndex: 9999,
        transform: 'scale(.75)'
      }}
    >
      <Card
        className="shadow-md rounded-full transform"
      >
        <ArrowCircleUpIcon className="w-7 h-7" />
      </Card>
    </ScrollToTop>
  )
}

BackToTop.displayName = 'DolanBackToTop'
export default BackToTop
