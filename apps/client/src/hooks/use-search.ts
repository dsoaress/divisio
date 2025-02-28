import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Output = {
  search: string
  setSearch(search: string): void
}

export function useSearch(): Output {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const search = searchParams.get('search') ?? ''

  function setSearch(search: string): void {
    const params = new URLSearchParams(searchParams.toString())
    params.set('search', search)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    search,
    setSearch
  }
}
