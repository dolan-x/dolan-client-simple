import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json([
      {
        name: 'TypeScript',
        slug: 'ts',
        count: 114514,
        posts: [
          1
        ]
      },
      {
        name: '文学',
        slug: 'writing',
        count: 1919810,
        posts: [
          2
        ]
      }
    ])
}
