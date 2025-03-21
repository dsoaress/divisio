import 'server-only'

import xior from 'xior'
import errorRetryPlugin from 'xior/plugins/error-retry'

import { env } from '@/config/env'
import { getSessionAction } from '@/modules/session/actions/get-session.action'

const api = xior.create({
  baseURL: env.SERVER_URL,
  cache: 'force-cache',
  next: { revalidate: 60 },
  timeout: 5000
})

api.plugins.use(
  errorRetryPlugin({
    retryTimes: 3,
    retryInterval: 1000,
    enableRetry(_, error): boolean | undefined {
      if ([400, 401, 403].includes(error.response?.status ?? 0)) return false
    }
  })
)

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
