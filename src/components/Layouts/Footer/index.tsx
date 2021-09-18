import { FC, useState, useEffect } from 'react'

const Footer: FC = () => {
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)
  useEffect(() => setShowAfterRender(true), [])

  if (!showAfterRender) return null
  return (
    <footer className="border-t text-center py-4 mt-20">
      Copyright © 2021 Ray
    </footer>
  )
}

Footer.displayName = 'DolanFooterLayout'
export default Footer
