import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function fetcher (url: string) {
  return await axios.get(url).then((res) => res.data)
}
