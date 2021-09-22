import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json([
      {
        name: 'TypeScript',
        slug: 'ts',
        count: 4404024
      },
      {
        name: 'React',
        slug: 'react',
        count: 666
      }
    ])
}
