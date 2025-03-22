import xior from 'xior'
import errorRetryPlugin from 'xior/plugins/error-retry'

import { env } from '@/config/env'
import type { HttpRequest } from '@/core/base/http-request'
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
  error => {
    console.error(JSON.stringify(error, null, 2))
    return Promise.reject(new Error(JSON.stringify(error.response?.data || error, null, 2)))
  }
)

export function xiorHttpRequest(): HttpRequest {
  return {
    async get<Result, Params>(url: string, params: Params, options?: RequestInit): Promise<Result> {
      return api.get(url, { ...params, ...options }).then(({ data }) => data)
    },

    async post<Result, Body>(url: string, body: Body, options?: RequestInit): Promise<Result> {
      return api.post(url, body, options).then(({ data }) => data)
    },

    async patch<Result, Body>(url: string, body: Body, options?: RequestInit): Promise<Result> {
      return api.patch(url, body, options).then(({ data }) => data)
    },

    async put<Result, Body>(url: string, body: Body, options?: RequestInit): Promise<Result> {
      return api.put(url, body, options).then(({ data }) => data)
    },

    async del<Result>(url: string, options?: RequestInit): Promise<Result> {
      return api.delete(url, options).then(({ data }) => data)
    }
  }
}
