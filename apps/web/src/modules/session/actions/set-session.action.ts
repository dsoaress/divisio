import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { CONSTANTS } from '@/config/constants'
import { env } from '@/config/env'
import { cookieOptions } from '@/lib/cookie-options'

type Input = {
  accessToken: string | null
  refreshToken: string | null
}

export async function setSessionAction({ accessToken, refreshToken }: Input): Promise<void> {
  const isStaging = env.APP_ENV === 'staging'
  if (isStaging) {
    accessToken = CONSTANTS.STAGING_TOKEN
    refreshToken = ' '
  }
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
    redirect('/groups')
  }
  redirect('/login')
}
