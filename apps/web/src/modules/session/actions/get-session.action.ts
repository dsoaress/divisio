'use server'

import * as jose from 'jose'
import { cookies } from 'next/headers'

import { CONSTANTS } from '@/config/constants'
import { env } from '@/config/env'

type Output = {
  hasValidSession: boolean
  hasExpiredSession: boolean
  accessToken?: string
  refreshToken?: string
}

export async function getSessionAction(): Promise<Output> {
  const cookieStore = await cookies()
  let accessToken = cookieStore.get(CONSTANTS.COOKIES.ACCESS_TOKEN)?.value
  const refreshToken = cookieStore.get(CONSTANTS.COOKIES.REFRESH_TOKEN)?.value
  let isValidAccessToken = false

  if (accessToken) {
    await jose
      .jwtVerify(accessToken, new TextEncoder().encode(env.JWT_SECRET))
      .then(() => {
        isValidAccessToken = true
      })
      .catch(() => {
        accessToken = undefined
      })
  }

  const hasValidSession = !!accessToken && !!refreshToken && isValidAccessToken
  const hasExpiredSession = !accessToken && !!refreshToken

  return {
    hasValidSession,
    hasExpiredSession,
    accessToken,
    refreshToken
  }
}
