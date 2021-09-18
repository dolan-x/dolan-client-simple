import { FC, HTMLAttributes } from 'react'
import { Card, Code } from '@geist-ui/react'

import { SupportedCommentSystems } from '@/lib/types'

type Props = {
  type: SupportedCommentSystems
}
type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
type CommentsProps = Props & NativeAttrs
const Comments: FC<CommentsProps> = ({ type, ...props }: CommentsProps) => {
  return (
    <Card {...props}>
      <div className="text-center">
        假装这是一个<Code>{type}</Code>评论系统:-)
      </div>
    </Card>
  )
}

Comments.displayName = 'DolanCommentsWidget'
export default Comments
