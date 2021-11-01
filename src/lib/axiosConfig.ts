import axios from 'axios'

axios.defaults.validateStatus = status => {
  return [200, 301, 302].includes(status)
}
axios.interceptors.request.use(request => request, error => {
  console.log('request error', error)
})
