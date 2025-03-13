import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Input = {
  defaultPage?: number
  defaultPerPage?: number
}

type Output = {
  page: number
  perPage: number
  setPage(page: number): void
  setPerPage(perPage: number): void
}

export function usePagination(
  { defaultPage, defaultPerPage }: Input = { defaultPage: 1, defaultPerPage: 10 }
): Output {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const page = Number(searchParams.get('page')) || defaultPage
  const perPage = Number(searchParams.get('per-page')) || defaultPerPage

  function setPage(page: number): void {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function setPerPage(perPage: number): void {
    const params = new URLSearchParams(searchParams.toString())
    params.set('per-page', String(perPage))
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    page,
    perPage,
    setPage,
    setPerPage
  } as Output
}
