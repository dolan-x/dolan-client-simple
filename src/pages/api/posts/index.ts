import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      title: 'Dolan测试1',
      info: '阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围阿士大夫撒法尔范围',
      authors: [
        {
          name: 'ray',
          avatar: 'https://react.geist-ui.dev/images/avatar.png',
          bio: 'JavaScript 工程师'
        }
      ],
      id: 1,
      thumbnail: 'https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png',
      type: 'post'
    },
    {
      title: 'Dolan测试2',
      info: '555',
      authors: [
        {
          name: 'ray',
          avatar: 'https://react.geist-ui.dev/images/avatar.png',
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
          avatar: 'https://gitee.com/RACD/cdn/raw/master/imgs/7c1ed21b0ef41bd5ad6e6cee5a9496cb39dbb6fd97d1.jpg',
          bio: '作家'
        }
      ],
      id: 3,
      thumbnail: 'https://gitee.com/RACD/cdn/raw/master/imgs/4a36acaf2edda3cc05b3725b01e93901213f9272.jpg',
      type: 'post'
    }
  ])
}
