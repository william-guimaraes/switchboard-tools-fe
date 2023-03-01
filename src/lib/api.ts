import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: 'http://localhost:8080',
})

baseAPI.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)