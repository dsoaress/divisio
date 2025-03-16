import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

import { CONSTANTS } from '@/config/constants'
import { api } from '@/lib/api'
import { cookieOptions } from '@/lib/cookie-options'

export async function GET(request: NextRequest): Promise<void> {
  const searchParams = request.nextUrl.searchParams
  const accessToken = searchParams.get('accessToken')
  const refreshToken = searchParams.get('refreshToken')
  if (accessToken && refreshToken) {
    const cookieStore = await cookies()
    cookieStore
      .set(
        CONSTANTS.COOKIES.ACCESS_TOKEN,
        accessToken,
        cookieOptions(CONSTANTS.COOKIES.ACCESS_TOKEN_MAX_AGE)
      )
      .set(
        CONSTANTS.COOKIES.REFRESH_TOKEN,
        refreshToken,
        cookieOptions(CONSTANTS.COOKIES.REFRESH_TOKEN_MAX_AGE)
      )
    api.defaults.headers = { Authorization: `Bearer ${accessToken}` }
    redirect('/groups')
  }
  redirect('/login')
}
