import { type NextRequest, NextResponse } from 'next/server'

import { CONSTANTS } from './config/constants'
import { api } from './lib/api'

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
        .set(CONSTANTS.COOKIES.ACCESS_TOKEN, data.accessToken, {
          maxAge: CONSTANTS.COOKIES.ACCESS_TOKEN_MAX_AGE,
          path: '/',
          secure: true,
          httpOnly: true
        })
        .set(CONSTANTS.COOKIES.REFRESH_TOKEN, data.refreshToken, {
          maxAge: CONSTANTS.COOKIES.REFRESH_TOKEN_MAX_AGE,
          path: '/',
          secure: true,
          httpOnly: true
        })
    } catch {
      response.cookies
        .delete(CONSTANTS.COOKIES.ACCESS_TOKEN)
        .delete(CONSTANTS.COOKIES.REFRESH_TOKEN)
    }
  }

  return response
}
