import { env } from '@/infra/config/env'

type UserInfoOutput = {
  firstName: string
  lastName: string
  email: string
  avatar?: string
}

export class GoogleOAuthService {
  getAuthUrl(): string {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = {
      redirect_uri: env.GOOGLE_OAUTH_REDIRECT_URL,
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

  async fetchUserInfo(code: string): Promise<UserInfoOutput> {
    const { accessToken, idToken } = await this.fetchAccessToken(code)
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`,
      { headers: { Authorization: `Bearer ${idToken}` } }
    )
    if (!response.ok) throw new Error('Failed to fetch user')
    const userInfo = (await response.json()) as {
      given_name: string
      family_name: string
      email: string
      picture: string
    }
    return {
      firstName: userInfo.given_name,
      lastName: userInfo.family_name,
      email: userInfo.email,
      avatar: userInfo.picture
    }
  }

  private async fetchAccessToken(code: string): Promise<{ accessToken: string; idToken: string }> {
    if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET)
      throw new Error('Google OAuth 2.0 is not configured')
    const options = {
      code,
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: env.GOOGLE_OAUTH_REDIRECT_URL,
      grant_type: 'authorization_code'
    }
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(options).toString()
    })
    if (!response.ok) throw new Error('Failed to fetch access token')
    const { access_token, id_token } = (await response.json()) as {
      access_token: string
      id_token: string
    }
    return { accessToken: access_token, idToken: id_token }
  }
}
