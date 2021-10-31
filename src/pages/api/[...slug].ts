import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { Method } from 'axios'
import '@/lib/axiosConfig'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { slug: _slug, ..._query } = req.query
  const slug = _slug as string[]
  const pathWithoutQuery = `/${slug.join('/')}`
  const queries = []
  Object
    .keys(_query)
    .forEach(key => {
      queries.push(`${key}=${_query[key]}`)
    })
  const path = `${pathWithoutQuery}?${queries.join('&')}`
  const response = axios.request({
    url: `${process.env.API_URL}${path}`,
    method: req.method as Method
  })
  const result = await response
  res
    .status(result.status)
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(result.data))
}
