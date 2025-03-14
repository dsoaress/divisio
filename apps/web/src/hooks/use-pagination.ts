import { CONSTANTS } from '@/core/constantes'
import { searchParamsValidator } from '@/validators/search-params.validator'
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

  const { p: page, pp: perPage } = searchParamsValidator.parse(Object.fromEntries(searchParams))

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
    params.delete(CONSTANTS.PAGE)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    page: String(page),
    perPage: String(perPage),
    setPage,
    setPerPage
  } as Output
}
