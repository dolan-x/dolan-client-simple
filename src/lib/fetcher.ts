import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fetcher (url: string) {
  return axios.get(url).then((res) => res.data)
}
