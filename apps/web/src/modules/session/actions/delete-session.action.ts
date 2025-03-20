import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { CONSTANTS } from '@/config/constants'

export async function deleteSessionAction(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(CONSTANTS.COOKIES.ACCESS_TOKEN).delete(CONSTANTS.COOKIES.REFRESH_TOKEN)
  redirect('/login')
}
