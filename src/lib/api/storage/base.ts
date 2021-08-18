import { Post } from '@/lib/types'

abstract class Base {
  getPosts: () => Post[]
  getPost: (id: number) => Post
}

export default Base
