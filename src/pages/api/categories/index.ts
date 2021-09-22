import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json([
      {
        name: 'TypeScript',
        slug: 'ts',
        count: 6
      },
      {
        name: '文学',
        slug: 'writing',
        count: 9
      }
    ])
}
