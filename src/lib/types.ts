import { ReactNode } from 'react'

export type Author = {
  name: string
  avatar: string
  bio?: string
}

export type Brand<T> = T & { readonly brand: unique symbol }

export type PostID = Brand<string>

export type TagSlug = Brand<string>

export type CategorySlug = Brand<string>

export type Post = {
  title: {
    original?: string
    rendered: string
  }
  content: {
    original?: string
    rendered: string
  }
  excerpt: {
    original?: string
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
    ]
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
  posts: PostID[]
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

export type WidgetMeta = {
  name: string
  id: string
  description: string
  component: ReactNode
}

export type NotFoundAPIResult = {
  code: 'invalid_rest_api'
  message: 'Rest API not found.'
  status: 404
}

export type SuccessAPIResult = {
  status: 200
}

export type SupportedCommentSystems = 'waline' | 'twikoo' | 'disqus' | 'livere' | 'gitalk'

export type SupportedLocales = 'en-US' | 'zh-Hans'
