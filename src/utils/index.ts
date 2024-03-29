import { ReactNode } from 'react'

import { SupportedLocales } from '@/lib/types'

/**
 * Receives a string,
 * returns an API URL.
 * @param {string} url
 * @param {string} isServer
 * @returns {string}
 */
export const getApiLink = (url: string, isServer = true): string => `${isServer ? process.env.BASE_URL : ''}/api/${url}`
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
    ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) ?? []).length
    : 0
}
/**
 * Timestamp to string util.
 * @param {number} timestamp
 * @returns {string}
 */
export const getLocalTime = (timestamp: number, locale?: SupportedLocales): string => {
  return new Date(timestamp)
    .toLocaleString(locale || undefined)
    .replace(/:\d{1,2}$/, ' ')
    .replace(/\//g, ' · ')
}
/**
 * Wraps the component.
 * If it is loading, returns null.
 * @param {boolean} isLoading
 * @param {ReactNode} component
 * @returns {ReactNode | null}
 */
export const wrapLoadingWidget = (isLoading: boolean, component: ReactNode, loadingComponent?: ReactNode): ReactNode => {
  if (isLoading) return loadingComponent || null
  return component
}

export const checkValidEnvConfig = (): {
  isValid: boolean
  missingSettings: string[]
} => {
  const requiredSettings = ['BASE_URL', 'API_URL']
  const missingSettings = requiredSettings.filter(setting => !process.env[setting])
  return {
    isValid: missingSettings.length === 0,
    missingSettings
  }
}
