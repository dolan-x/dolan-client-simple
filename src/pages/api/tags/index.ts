import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json([
      { name: 'TypeScript', count: 1 },
      { name: 'Webpack', count: 30 },
      { name: 'Node.js', count: 12 },
      { name: '前端', count: 7 },
      { name: 'J V A V', count: 99 },
      { name: 'JavaScript', count: 666 },
      { name: 'Next.js', count: 123 },
      { name: 'React', count: 5 }
    ])
}
