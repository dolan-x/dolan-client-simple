import { FC } from 'react'
import { Card } from '@geist-ui/react'
import { ChevronUpCircle } from '@geist-ui/react-icons'
import ScrollToTop from 'react-scroll-up'

const BackToTop: FC = () => (
  <ScrollToTop
    showUnder={160}
    style={{
      zIndex: 9999,
      transform: 'scale(.75)'
    }}
  >
    <Card
      className="shadow-md rounded-full transform"
      title="Back To Top"
    >
      <ChevronUpCircle />
    </Card>
  </ScrollToTop>
)

export default BackToTop
