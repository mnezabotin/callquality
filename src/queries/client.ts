import { QueryClient } from 'react-query'
import axios from 'axios'
import { getTokenFromStorage } from '@/contexts'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

apiClient.interceptors.request.use(
  config => {
    const t = getTokenFromStorage()
    if (t) {
      config.headers.authorization = `Bearer ${t}`
    }
    return config
  }
)

export { apiClient }

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      retryOnMount: false
    },
  },
})
