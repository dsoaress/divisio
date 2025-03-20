import xior from 'xior'

import { env } from '@/config/env'
import { getSessionAction } from '@/modules/session/actions/get-session.action'

const api = xior.create({
  baseURL: env.SERVER_URL,
  cache: 'force-cache',
  next: { revalidate: 60 }
})

api.interceptors.request.use(async config => {
  const { accessToken, hasValidSession } = await getSessionAction()
  if (hasValidSession) config.headers.Authorization = `Bearer ${accessToken}`
  else config.headers.Authorization = undefined
  return config
})

api.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(JSON.stringify(error.response?.data || error, null, 2)))
)

export { api }
