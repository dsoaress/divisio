import xior from 'xior'

import { CONSTANTS } from '@/config/constants'
import { env } from '@/config/env'
import { cookies } from 'next/headers'

const api = xior.create({
  baseURL: env.SERVER_URL,
  cache: 'force-cache',
  next: { revalidate: 60 }
})

api.interceptors.request.use(async config => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(CONSTANTS.COOKIES.ACCESS_TOKEN)?.value
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    console.error(error.response?.data || error)
    return Promise.reject(new Error(JSON.stringify(error.response?.data || error, null, 2)))
  }
)

export { api }
