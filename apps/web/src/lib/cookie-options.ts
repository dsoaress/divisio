import { env } from '@/config/env'

type Output = {
  maxAge: number
  httpOnly: boolean
  secure: boolean
  path: string
  domain: string
  sameSite: 'lax' | 'strict' | 'none'
}

export function cookieOptions(maxAge: number): Output {
  return {
    maxAge,
    httpOnly: true,
    secure: true,
    path: '/',
    domain: env.COOKIE_DOMAIN,
    sameSite: 'strict'
  }
}
