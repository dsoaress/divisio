import { type NextRequest, NextResponse } from 'next/server'

import { CONSTANTS } from './config/constants'
import { api } from './lib/api'
import { cookieOptions } from './lib/cookie-options'

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const accessToken = request.cookies.get(CONSTANTS.COOKIES.ACCESS_TOKEN)
  const refreshToken = request.cookies.get(CONSTANTS.COOKIES.REFRESH_TOKEN)
  const response = NextResponse.next()
  if (!accessToken && refreshToken) {
    try {
      const { data } = await api
        .post('/sessions/refresh', { refreshToken: refreshToken.value })
        .then(({ data }) => data)
      response.cookies
        .set(
          CONSTANTS.COOKIES.ACCESS_TOKEN,
          data.accessToken,
          cookieOptions(CONSTANTS.COOKIES.ACCESS_TOKEN_MAX_AGE)
        )
        .set(
          CONSTANTS.COOKIES.REFRESH_TOKEN,
          data.refreshToken,
          cookieOptions(CONSTANTS.COOKIES.REFRESH_TOKEN_MAX_AGE)
        )
    } catch {
      api.defaults.headers = {}
      response.cookies
        .delete(CONSTANTS.COOKIES.ACCESS_TOKEN)
        .delete(CONSTANTS.COOKIES.REFRESH_TOKEN)
    }
  }

  return response
}
