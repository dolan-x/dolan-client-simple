import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res
    .status(200)
    .json({
      favicon: 'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-680a77c1b5c63dc65381e38bb3191cb4.jpeg',
      name: 'Dolan Test Site',
      description: '这是一个简介！'
    })
}
