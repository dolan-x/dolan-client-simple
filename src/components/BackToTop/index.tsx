import {
  FC,
  useState,
  useEffect
} from 'react'
import ScrollToTop from 'react-scroll-up'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'

import Widget from '../Widgets'

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
      <Widget
        className="shadow-md transform !rounded-full"
        rounded={false}
      >
        <Widget.Content className="flex">
          <ArrowCircleUpIcon className="w-7 h-7" />
        </Widget.Content>
      </Widget>
    </ScrollToTop>
  )
}

BackToTop.displayName = 'DolanBackToTop'
export default BackToTop
