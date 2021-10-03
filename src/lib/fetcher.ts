import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetcher (url: string): Promise<any> {
  return await axios.get(url).then((res) => res.data)
}
