import { CONSTANTS } from '@/core/constantes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Input = {
  defaultPage?: string
  defaultPerPage?: string
}

type Output = {
  page: string
  perPage: string
  setPage(page: string): void
  setPerPage(perPage: string): void
}

export function usePagination(
  { defaultPage, defaultPerPage }: Input = {
    defaultPage: CONSTANTS.DEFAULT_PAGE,
    defaultPerPage: CONSTANTS.DEFAULT_PER_PAGE
  }
): Output {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const page = searchParams.get(CONSTANTS.PAGE) ?? defaultPage
  const perPage = searchParams.get(CONSTANTS.PER_PAGE) ?? defaultPerPage

  function setPage(page: string): void {
    const params = new URLSearchParams(searchParams.toString())
    if (page === defaultPage) params.delete(CONSTANTS.PAGE)
    else params.set(CONSTANTS.PAGE, page)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function setPerPage(perPage: string): void {
    const params = new URLSearchParams(searchParams.toString())
    if (perPage === defaultPerPage) params.delete(CONSTANTS.PER_PAGE)
    else params.set(CONSTANTS.PER_PAGE, perPage)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    page,
    perPage,
    setPage,
    setPerPage
  } as Output
}
