import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import '@/lib/axiosConfig'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (!process.env.API_URL) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: 'API_URL is not defined',
        error: 'API_URL is not defined'
      })
    return
  }
  if (!['GET', 'get'].includes(req.method)) {
    res
      .status(405)
      .json({
        statusCode: 405,
        message: 'Method not allowed',
        error: 'Method not allowed'
      })
    return
  }
  const { slug: _slug, ..._query } = req.query
  const slug = _slug as string[]
  const encodedSlugs = slug.map(encodeURIComponent).join('/')
  const pathWithoutQuery = `${encodedSlugs}`
  const queries = []
  Object
    .keys(_query)
    .forEach(key => {
      queries.push(encodeURIComponent(`${key}=${_query[key]}`))
    })
  const path = `${pathWithoutQuery}?${queries.join('&')}`
  try {
    const response = axios.get(`${process.env.API_URL}/v1/${path}`)
    const result = await response
    res
      .status(result.status)
      .json((result.data as any).data)
  } catch {
    res
      .status(404)
      .json({
        statusCode: 404,
        message: 'Network error',
        error: 'Network error'
      })
  }
}
