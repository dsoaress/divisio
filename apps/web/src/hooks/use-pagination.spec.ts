import { act, renderHook } from '@testing-library/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Mock } from 'vitest'

import { CONSTANTS } from '@/config/constants'
import { usePagination } from './use-pagination'

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn()
}))

describe('usePagination', () => {
  const mockReplace = vi.fn()
  const mockPathname = '/test-path'
  let mockSearchParams: URLSearchParams

  beforeEach(() => {
    mockSearchParams = new URLSearchParams()
    ;(useRouter as Mock).mockReturnValue({ replace: mockReplace })
    ;(usePathname as Mock).mockReturnValue(mockPathname)
    ;(useSearchParams as Mock).mockReturnValue(mockSearchParams)
  })

  it('should return default page and perPage values', () => {
    const { result } = renderHook(() => usePagination())

    expect(result.current.page).toBe(CONSTANTS.DEFAULT_PAGE)
    expect(result.current.perPage).toBe(CONSTANTS.DEFAULT_PER_PAGE)
  })

  it('should return page and perPage values from search params', () => {
    mockSearchParams.set(CONSTANTS.PAGE, '2')
    mockSearchParams.set(CONSTANTS.PER_PAGE, CONSTANTS.PER_PAGE_OPTIONS[1])

    const { result } = renderHook(() => usePagination())

    expect(result.current.page).toBe('2')
    expect(result.current.perPage).toBe(CONSTANTS.PER_PAGE_OPTIONS[1])
  })

  it('should update page in search params', () => {
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.setPage('3')
    })

    expect(mockReplace).toHaveBeenCalledWith(`${mockPathname}?${CONSTANTS.PAGE}=3`, {
      scroll: false
    })
  })

  it('should update perPage in search params', () => {
    mockSearchParams.set(CONSTANTS.PAGE, '1')
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.setPerPage('30')
    })

    expect(mockReplace).toHaveBeenCalledWith(`${mockPathname}?${CONSTANTS.PER_PAGE}=30`, {
      scroll: false
    })
  })
})
