import {
  Post,
  PostID,
  Tag,
  TagSlug
} from '@/lib/types'

abstract class Base {
  abstract getPosts (): Post[]
  abstract getPost (id: PostID): Post
  abstract getTags (): Tag[]
  abstract getTag (slug: TagSlug): Tag
}

export default Base
