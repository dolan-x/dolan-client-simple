export type Author = {
  name: string
  avatar: string
  bio?: string
}

export type Tag = {
  name: string
  count: number
}

export type Post = {
  title: string
  info: string
  content: string
  authors: Author[]
  timestamp: number
  id: string
  type: 'post' | 'mood'
  thumbnail?: string
  tags: string[]
  category: string
}

export type Category = {
  name: string
  posts: PostID[]
}

export type SiteProfile = {
  favicon: string
  name: string
  description: string
}

export type PostID = string & { readonly brand: unique symbol }
export type TagName = string & { readonly brand: unique symbol }
export type CategoryName = string & { readonly brand: unique symbol }

export type SupportedCommentSystems = 'waline' | 'twikoo' | 'disqus' | 'livere' | 'gitalk'
