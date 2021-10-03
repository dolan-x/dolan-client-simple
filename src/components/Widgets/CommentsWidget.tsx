import { FC, HTMLAttributes } from 'react'
import { Code } from '@geist-ui/react'

import Widget from '.'

import { SupportedCommentSystems } from '@/lib/types'

type Props = {
  type: SupportedCommentSystems
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>
type CommentsProps = Props & NativeAttrs
const Comments: FC<CommentsProps> = ({ type, ...props }: CommentsProps) => {
  return (
    <Widget {...props}>
      <div className="text-center">
        假装这是一个<Code>{type}</Code>评论系统:-)
      </div>
    </Widget>
  )
}

Comments.displayName = 'DolanCommentsWidget'
export default Comments
