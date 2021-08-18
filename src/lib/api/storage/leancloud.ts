/* eslint-disable no-unused-vars */
import AV from 'leancloud-storage'

import { Post } from '@/lib/types'
import Base from './base'

const { LC_APP_ID, LC_APP_KEY, LC_MASTER_KEY, LC_SERVER_URL } = process.env
AV.Cloud.useMasterKey()
AV.init({
  appId: LC_APP_ID,
  appKey: LC_APP_KEY,
  masterKey: LC_MASTER_KEY,
  serverURL: LC_SERVER_URL
})
/*
class LeanCloudStorageAPI implements Base {
  getPost (id: number): Post {}
  getPosts (): Post[] {}
}
*/
