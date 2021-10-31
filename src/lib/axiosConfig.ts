import axios from 'axios'

axios.defaults.validateStatus = status => {
  return true
}
axios.interceptors.request.use(request => request, error => {
  console.log('request error', error)
})
