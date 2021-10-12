import { FC } from 'react'

import Category from './Category'
import Tags from './Tags'

type PostFooterProps = {
  tags: string[]
  category: string
}

const PostFooter: FC<PostFooterProps> = ({ tags, category }) => {
  return (
    <>
      <div className="flex flex-nowrap">
        <Category category={category} />
        <Tags tags={tags} />
      </div>
    </>
  )
}

PostFooter.displayName = 'DolanPostFooter'
export default PostFooter
