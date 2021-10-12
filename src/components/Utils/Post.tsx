import { FC } from 'react'

import PostCard from '@/components/Widgets/PostCardWidget'
import PostCardSkeleton from '@/components/Aside/AsideWidget.skeleton'

import { PostID } from '@/lib/types'
import { usePost } from '@/lib/hooks'

type PostProps = {
  id: PostID
}
const Post: FC<PostProps> = ({ id }) => {
  const {
    post,
    isLoading,
    isError
  } = usePost(id)

  if (isLoading) return <PostCardSkeleton />

  const {
    title,
    excerpt,
    id: postID,
    authors,
    postMetas
  } = post
  return (
    <PostCard
      title={title.rendered}
      excerpt={excerpt.rendered}
      postID={postID}
      authors={authors}
      postMetas={postMetas}
    />
  )
}

export default Post
