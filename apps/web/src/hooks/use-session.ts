import { useTransition } from 'react'

import { deleteSessionAction } from '@/modules/session/actions/delete-session.action'

type Output = {
  isLoading: boolean
  deleteSession: () => void
}

export function useSession(): Output {
  const [isLoading, startTransition] = useTransition()

  function deleteSession(): void {
    startTransition(deleteSessionAction)
  }

  return { isLoading, deleteSession }
}
