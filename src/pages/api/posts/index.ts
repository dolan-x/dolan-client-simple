import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      title: 'Dolan测试1',
      info: '测试！',
      authors: [
        {
          name: 'ray',
          avatar:
            'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-680a77c1b5c63dc65381e38bb3191cb4.jpeg',
          bio: 'JavaScript 工程师'
        }
      ],
      id: 1,
      thumbnail:
        'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-f2585874e4032ebc4979d21966d00c6f.png',
      type: 'post',
      category: '测试'
    },
    {
      title: 'Dolan测试2',
      info: '555',
      authors: [
        {
          name: 'ray',
          avatar:
            'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751323-680a77c1b5c63dc65381e38bb3191cb4.jpeg',
          bio: 'JavaScript 工程师'
        }
      ],
      id: 2,
      type: 'mood'
    },
    {
      title: '孔乙己',
      info: '鲁迅',
      authors: [
        {
          name: '鲁迅',
          avatar:
            'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751322-eabd8e6d0a7c91433d8463c1cd0fb9c8.jpg',
          bio: '作家'
        }
      ],
      id: 3,
      thumbnail:
        'https://gitee.com/RACD/cdn/raw/master/imgs/1629718751322-e10b518cedcc4bb7460b102814bafd41.jpg',
      type: 'post',
      category: '文学'
    }
  ])
}
