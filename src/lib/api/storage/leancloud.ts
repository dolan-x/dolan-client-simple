/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import AV from 'leancloud-storage'

import {
  Post,
  PostID,
  Tag,
  TagSlug
} from '@/lib/types'
import Base from './base'

type Config = {
  readonly LC_APP_ID: string
  readonly LC_APP_KEY: string
  readonly LC_MASTER_KEY: string
  readonly LC_SERVER_URL: string
}
class LeanCloudStorageAPI extends Base {
  static initialized = false

  constructor (
    public config: Config
  ) {
    super()
    if (LeanCloudStorageAPI.initialized) return
    this.init()
    LeanCloudStorageAPI.initialized = true
  }

  init (): void {
    const {
      LC_APP_ID,
      LC_APP_KEY,
      LC_MASTER_KEY,
      LC_SERVER_URL
    } = this.config
    AV.Cloud.useMasterKey()
    AV.init({
      appId: LC_APP_ID,
      appKey: LC_APP_KEY,
      masterKey: LC_MASTER_KEY,
      serverURL: LC_SERVER_URL
    })
  }

  getTags (): Tag[] {
    return {} as Tag[]
  }

  getTag (slug: TagSlug): Tag {
    return {} as Tag
  }

  getPost (id: PostID): Post {
    return {} as Post
  }

  getPosts (): Post[] {
    return {} as Post[]
  }
}

export default new LeanCloudStorageAPI(process.env)
