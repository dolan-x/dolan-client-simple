import { FC, memo } from 'react'
import { useTheme } from '@geist-ui/react'

type Props = {
  opacity?: number
}

const defaultProps: Props = {
  opacity: 0.5
}

export type ImageSkeletonProps = Props & typeof defaultProps

const ImageSkeleton: FC<ImageSkeletonProps> = memo(
  ({ opacity = 0.5, ...props }: ImageSkeletonProps) => {
    const theme = useTheme()
    return (
      <div
        className="skeleton"
        {...props}
      >
        <style jsx>{`
          .skeleton {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              270deg,
              ${theme.palette.accents_1},
              ${theme.palette.accents_2},
              ${theme.palette.accents_2},
              ${theme.palette.accents_1}
            );
            background-size: 400% 100%;
            animation: loading 3s ease-in-out infinite;
            opacity: ${opacity};
            transition: opacity 300ms ease-out;
          }
          @keyframes loading {
            0% {
              background-position: 200% 0;
            }
            to {
              background-position: -200% 0;
            }
          }
        `}</style>
      </div>
    )
  }
)

ImageSkeleton.defaultProps = defaultProps
ImageSkeleton.displayName = 'GeistImageSkeleton'
export default ImageSkeleton
