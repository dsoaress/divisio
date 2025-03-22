import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

import { env } from '@/config/env'
import { deleteSessionAction } from '@/modules/session/actions/delete-session.action'
import { setSessionAction } from '@/modules/session/actions/set-session.action'

const VALID_ACTIONS = ['login-google', 'login-callback', 'logout', 'profile']

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ action: string }> }
): Promise<void> {
  const { action } = await params
  if (!VALID_ACTIONS.includes(action)) redirect('/404')

  if (action === 'login-google') redirect(`${env.PUBLIC_SERVER_URL}/sessions/oauth/google`)

  if (action === 'login-callback') {
    const searchParams = request.nextUrl.searchParams
    const accessToken = searchParams.get('accessToken')
    const refreshToken = searchParams.get('refreshToken')
    return setSessionAction({ accessToken, refreshToken })
  }

  if (action === 'logout') return deleteSessionAction()

  if (action === 'profile') {
    throw new Error('Not implemented')
  }
}
