import axios from 'axios'

const ajax = axios.create()

ajax.defaults.validateStatus = status => {
  return [200, 301, 302].includes(status)
}
ajax.interceptors.request.use(request => request, error => {
  console.log('request error', error)
})

export default ajax
