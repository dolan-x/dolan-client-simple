import {
  Post,
  PostID,
  Tag,
  TagSlug
} from '@/lib/types'

abstract class Base {
  abstract getPosts (): Promise<Post[]>
  abstract getPost (id: PostID): Promise<Post>
  abstract getTags (): Promise<Tag[]>
  abstract getTag (slug: TagSlug): Promise<Tag>
}

export default Base
