import { FC } from 'react'
import { Button } from '@geist-ui/react'

const Header: FC = () => {
  return (
    <header className="fixed top-0 h-auto w-full lg:py-4 lg:px-5 py-2 px-1 shadow-sm bg-white z-9999">
      <div>
        <Button>1</Button>
      </div>
    </header>
  )
}

export default Header
