import {
  FC,
  ImgHTMLAttributes
} from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RoundedImageProps = ImgHTMLAttributes<any>
const RoundedImage: FC<RoundedImageProps> = ({
  className = '',
  ...props
}) => {
  return (
    <img
      className={`rounded-full ${className}`}
      {...props}
    />
  )
}

export default RoundedImage
