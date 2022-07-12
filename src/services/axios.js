import axios from 'axios'

const instance = axios.create({
//   baseURL: process.env.VUE_APP_BASE_URL,
//   baseURL: 'https://pa-muk.herokuapp.com/',
  timeout: 100000
})

export default instance
