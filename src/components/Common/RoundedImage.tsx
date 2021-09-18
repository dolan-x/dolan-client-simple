import { FC, ImgHTMLAttributes } from 'react'

type RoundedImageProps = ImgHTMLAttributes<any>
const RoundedImage: FC<RoundedImageProps> = ({ className = '', ...props }) => {
  return (
    <img
      className={`rounded-full ${className}`}
      {...props}
    />
  )
}

export default RoundedImage
