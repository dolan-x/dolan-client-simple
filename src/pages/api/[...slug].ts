import {
  NextApiRequest,
  NextApiResponse
} from 'next'
import ajax from '@/lib/ajax'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (!process.env.API_URL) { // If API_URL is not defined
    res
      .status(500)
      .json({
        statusCode: 500,
        message: 'API_URL is not defined',
        error: 'API_URL is not defined'
      })
    return
  }
  if (req.method.toUpperCase() !== 'GET') { // Validate request method. Only allows GET
    res
      .status(405)
      .json({
        statusCode: 405,
        message: 'Method not allowed',
        error: 'Method not allowed'
      })
    return
  }
  const { slug: _slug, ..._query } = req.query // `slug` is path
  const slug = _slug as string[]
  const pathWithoutQuery = slug.map(encodeURIComponent).join('/') // Combine path (no query)
  const queries = []
  Object
    .entries(_query)
    .forEach(([key, value]: [string, string]) => {
      queries.push(encodeURIComponent(`${key}=${value}`)) // Combine querystring
    })
  const path = `${pathWithoutQuery}?${queries.join('&')}` // Combine full path (with query)
  try {
    const response = ajax.get(`${process.env.API_URL}/v1/${path}`) // Get Data
    const result = await response
    res
      .status(result.status)
      .json((result.data as any).data) // By default the result has some other data, don't display
  } catch {
    res
      .status(404)
      .json({
        statusCode: 404,
        message: 'Not Found',
        error: 'Not Found'
      })
  }
}
