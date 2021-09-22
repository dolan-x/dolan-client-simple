import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { slug } = req.query

  res
    .status(200)
    .json({ name: slug, slug, count: 1 })
}
