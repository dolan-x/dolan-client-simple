export type Author = {
  name: string
  avatar: string
  bio?: string
}

export type Post = {
  title: string
  info: string
  body: string
  authors: Author[]
  timestamp: number
  id: number
  type: 'post' | 'mood'
  thumbnail?: string
}
