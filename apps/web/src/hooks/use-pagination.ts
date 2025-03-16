import { CONSTANTS } from '@/config/constants'
import { searchParamsValidator } from '@/validators/search-params.validator'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Output = {
  page: string
  perPage: string
  setPage(page: string): void
  setPerPage(perPage: string): void
}

export function usePagination(): Output {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const { p: page, pp: perPage } = searchParamsValidator.parse(Object.fromEntries(searchParams))

  function setPage(page: string): void {
    const params = new URLSearchParams(searchParams.toString())
    if (page === CONSTANTS.DEFAULT_PAGE) params.delete(CONSTANTS.PAGE)
    else params.set(CONSTANTS.PAGE, page)
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function setPerPage(perPage: string): void {
    const params = new URLSearchParams(searchParams.toString())
    if (perPage === CONSTANTS.DEFAULT_PER_PAGE) params.delete(CONSTANTS.PER_PAGE)
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
