import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { name } = req.query

  res
    .status(200)
    .json({ name, count: 1 })
}
