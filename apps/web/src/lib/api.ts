import { cookies } from 'next/headers'
import xior from 'xior'

const api = xior.create({
  baseURL: process.env.SERVER_URL,
  cache: 'force-cache',
  next: { revalidate: 60 }
})

api.interceptors.request.use(async config => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access-token')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken.value}`

  return config
})

api.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(JSON.stringify(error.response?.data, null, 2)))
)

export { api }
