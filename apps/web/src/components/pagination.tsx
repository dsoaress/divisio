'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

import { usePagination } from '@/hooks/use-pagination'

import { Button } from './button'

type PaginationProps = {
  pages: number
}

export function Pagination({ pages }: Readonly<PaginationProps>): React.JSX.Element {
  const { page, setPage } = usePagination()
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center font-medium text-sm">
        Page {page} of {pages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={(): void => setPage('1')}
          disabled={page === '1'}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={(): void => setPage(String(Number(page) - 1))}
          disabled={page === '1'}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={(): void => setPage(String(Number(page) + 1))}
          disabled={page === String(pages)}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={(): void => setPage(String(pages))}
          disabled={page === String(pages)}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRight />
        </Button>
      </div>
    </div>
  )
}
