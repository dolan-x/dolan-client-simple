import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import '@/lib/axiosConfig'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (!['GET', 'get'].includes(req.method)) {
    res
      .status(405)
      .setHeader('Content-Type', 'application/json')
      .end({
        code: 405,
        message: 'Method not allowed',
        error: 'Method not allowed'
      })
  }
  const { slug: _slug, ..._query } = req.query
  const slug = _slug as string[]
  const encodedSlugs = slug.map(encodeURIComponent).join('/')
  const pathWithoutQuery = `/${encodedSlugs}`
  const queries = []
  Object
    .keys(_query)
    .forEach(key => {
      queries.push(encodeURIComponent(`${key}=${_query[key]}`))
    })
  const path = `${pathWithoutQuery}?${queries.join('&')}`
  const response = axios.get(`${process.env.API_URL}${path}`)
  const result = await response
  res
    .status(result.status)
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(result.data))
}
