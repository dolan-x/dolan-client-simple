import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(404)
    .json({
      code: 'invalid_rest_api',
      message: 'Rest API not found.',
      status: 404
    })
}
