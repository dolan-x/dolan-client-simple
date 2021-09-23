import { ReactNode } from 'react'

/**
 * Receives a string,
 * returns an API URL.
 * @param {string} url
 * @returns {string}
 */
export const getAPILink = (url: string): string => `${process.env.BASE_URL}/api/${url}`
/**
 * Receives a post id,
 * returns a post URL.
 * @param {string} id
 * @returns {string}
 */
export const getPostLink = (id = ''): string => `/posts/${id}`
/**
 * Receives a tag name,
 * returns a tag URL.
 * @param {string} name
 * @returns {string}
 */
export const getTagLink = (name = ''): string => `/tags/${name}`
/**
 * Receives a category name,
 * returns a category URL.
 * @param {string} name
 * @returns {string}
 */
export const getCategoryLink = (name = ''): string => `/categories/${name}`
/**
 * Get word count.
 * [Source](https://github.com/ppoffice/hexo-theme-icarus/blob/master/layout/common/article.jsx#L11-L18)
 * @param {string} content
 * @returns {number}
 */
export const getWordCount = (content: string): number => {
  content = content.replace(/<\/?[a-z][^>]*>/gi, '')
  content = content.trim()
  return content
    ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length
    : 0
}
/**
 * Timestamp to string util.
 * @param {number} timestamp
 * @returns {string}
 */
export const getLocalTime = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString().replace(/:\d{1,2}$/, ' ')
}
/**
 * Wraps the component.
 * If it is loading, returns null.
 * @param {boolean} isLoading
 * @param {ReactNode} component
 * @returns {ReactNode | null}
 */
export const wrapWidget = (isLoading: boolean, component: ReactNode): ReactNode => {
  if (isLoading) return null
  return component
}
