import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    if (refreshToken) {
      config.headers['X-Refresh-Token'] = refreshToken
    }
    return config
  },
  (error) => Promise.reject(error),
)

instance.interceptors.response.use(
  (response) => {
    const accessToken = response.headers['x-jwt-token']
    const refreshToken = response.headers['x-refresh-token']
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
    }
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken)
    }
    return response
  },
  (error) => Promise.reject(error),
)

export default instance

