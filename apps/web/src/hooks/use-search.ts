import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { CONSTANTS } from '@/core/constantes'

type Output = {
  search: string
  setSearch(search: string): void
}

export function useSearch(): Output {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const search = searchParams.get(CONSTANTS.SEARCH) ?? ''

  function setSearch(search: string): void {
    const params = new URLSearchParams(searchParams.toString())
    if (search) params.set(CONSTANTS.SEARCH, search)
    else params.delete(CONSTANTS.SEARCH)
    params.delete('p')
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    search,
    setSearch
  }
}
