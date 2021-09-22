export type Author = {
  name: string
  avatar: string
  bio?: string
}

export type PostID = string & { readonly brand: unique symbol }
export type TagSlug = string & { readonly brand: unique symbol }
export type CategorySlug = string & { readonly brand: unique symbol }

export type Post = {
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  sticky: false
  authors: Author[]
  timestamp: number
  id: string
  type: 'post' | 'mood'
  tags: string[]
  category: string
  postMetas: {
    headingImage: string
  }
  adjacentPosts?: {
    prev?: [
      number,
      string
    ],
    next?: [
      number,
      string
    ]
  }
}

export type Tag = {
  name: string
  slug: string
  count: number
}

export type Category = {
  name: string
  slug: string
  count: number
  posts: PostID[]
}

export type SiteProfile = {
  favicon: string
  name: string
  description: string
}

export type SupportedCommentSystems = 'waline' | 'twikoo' | 'disqus' | 'livere' | 'gitalk'
