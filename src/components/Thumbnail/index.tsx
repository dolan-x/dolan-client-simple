import { FC, useState, useEffect, useRef } from 'react'
import ThumbnailSkeleton from './Thumbnail.skeleton'

type ThumbnailProps = {
  thumbnail: string
  title: string
  hoverable: boolean
}

const Thumbnail: FC<ThumbnailProps> = ({
  thumbnail,
  title,
  hoverable = false
}: ThumbnailProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true)
  const imageRef = useRef<HTMLImageElement>(null)

  const imageLoaded = () => {
    setLoading(false)
  }

  useEffect(() => {
    if (!imageRef.current) return
    if (imageRef.current.complete) {
      setLoading(false)
      setShowSkeleton(false)
    }
  })

  return (
    <div className="-mx-card -mt-card mb-5 w-thumbnail">
      <div className="p-0 overflow-hidden h-48 425:h-56 500:h-64 md:h-72 w-full rounded-t">
        {showSkeleton && <ThumbnailSkeleton opacity={loading ? 0.5 : 0} />}
        <img
          ref={imageRef}
          onLoad={imageLoaded}
          src={thumbnail}
          alt={title}
          className={`rounded-t ${hoverable && 'transition duration-1000 ease-in-out transform hover:scale-110'}`}
        />
      </div>
    </div>
  )
}

Thumbnail.displayName = 'DolanThumbnail'
export default Thumbnail
