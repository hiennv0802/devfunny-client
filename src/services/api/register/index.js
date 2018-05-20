import axios from 'axios'

const baseUrl = 'http://0.0.0.0:4040/api/'
const registerUrl = baseUrl + 'register'

export default {
  register (params) {
    return axios.post(registerUrl, params)
  }
}
