import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { CONSTANTS } from './config/constants'
import { env } from './config/env'
import { httpModule } from './infra/http/http.module'
import { cookieOptions } from './lib/cookie-options'
import { getSessionAction } from './modules/session/actions/get-session.action'

export async function middleware(request: NextRequest): Promise<NextResponse | undefined> {
  const { hasExpiredSession, hasValidSession, refreshToken } = await getSessionAction()

  const currentPath = request.nextUrl.pathname
  const isProtectedRoute = CONSTANTS.PRIVATE_ROUTES.some(route => currentPath.startsWith(route))
  const isLoginPage = currentPath === '/login'

  const mustAuthenticate = isProtectedRoute && !hasValidSession && !refreshToken
  const mustRedirectFromLogin = isLoginPage && hasValidSession

  if (mustAuthenticate) return NextResponse.redirect(`${env.WEB_URL}/login`)
  if (mustRedirectFromLogin) return NextResponse.redirect(`${env.WEB_URL}/dashboard`)

  if (hasExpiredSession && refreshToken) {
    try {
      const { refreshSession } = httpModule()
      const { data } = await refreshSession.execute({ refreshToken })
      const response = NextResponse.next()
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
      return response
    } catch {
      const cookieStore = await cookies()
      cookieStore.delete(CONSTANTS.COOKIES.ACCESS_TOKEN).delete(CONSTANTS.COOKIES.REFRESH_TOKEN)
      return NextResponse.redirect(`${env.WEB_URL}/login`)
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
