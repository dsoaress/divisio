import Link from 'next/link'

import { Button } from '@/components/button'
import { env } from '@/config/env'

import { GoogleLogo } from './google-logo'

function googleOathLogin(): string {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
  const options = {
    redirect_uri: `${env.SERVER_URL}/sessions/oauth/google`,
    client_id: env.GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' ')
  } as Record<string, string>
  const qs = new URLSearchParams(options).toString()
  return `${rootUrl}?${qs}`
}

export function GoogleLogin(): React.JSX.Element {
  return (
    <Link href={googleOathLogin()}>
      <Button variant="outline" className="w-full">
        <GoogleLogo />
        Login with Google
      </Button>
    </Link>
  )
}
