import { FC, useState, useEffect, useRef } from 'react'
import HeadingImageSkeleton from './HeadingImage.skeleton'

interface HeadingImageProps {
  headingImage: string
  title: string
  className?: string
  hoverable?: boolean
  roundedBottom?: boolean
}

const HeadingImage: FC<HeadingImageProps> = ({
  headingImage,
  title,
  className = '',
  hoverable = false,
  roundedBottom = false
}: HeadingImageProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true)
  const imageRef = useRef<HTMLImageElement>(null)

  const imageLoaded = (): void => {
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
    <div className={`-mx-card -mt-card mb-5 w-heading-image ${className}`}>
      <div className={`p-0 overflow-hidden h-48 425:h-56 500:h-64 md:h-72 w-full ${roundedBottom ? 'rounded-lg' : 'rounded-t-lg'}`}>
        {showSkeleton && <HeadingImageSkeleton opacity={loading ? 0.5 : 0} />}
        <img
          ref={imageRef}
          onLoad={imageLoaded}
          src={headingImage}
          alt={title}
          className={`${roundedBottom ? 'rounded-lg' : 'rounded-t-lg'} ${hoverable && 'transition duration-1000 ease-in-out transform hover:scale-110'}`}
        />
      </div>
    </div>
  )
}

HeadingImage.displayName = 'DolanHeadingImage'
export default HeadingImage
