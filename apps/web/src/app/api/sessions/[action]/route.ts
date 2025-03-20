import { setSessionAction } from '@/modules/session/actions/set-session.action'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

const VALID_ACTIONS = ['login', 'logout', 'profile']

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ action: string }> }
): Promise<void> {
  const { action } = await params
  if (!VALID_ACTIONS.includes(action)) redirect('/404')

  if (action === 'login') {
    const searchParams = request.nextUrl.searchParams
    const accessToken = searchParams.get('accessToken')
    const refreshToken = searchParams.get('refreshToken')
    return setSessionAction({ accessToken, refreshToken })
  }

  if (action === 'logout') {
    throw new Error('Not implemented')
  }

  if (action === 'profile') {
    throw new Error('Not implemented')
  }
}
