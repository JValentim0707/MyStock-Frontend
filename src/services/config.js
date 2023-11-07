import axios from 'axios'

const devURL = 'http://localhost:3000'

axios.defaults.baseURL = devURL

const request = axios

export default request