import { act, renderHook } from '@testing-library/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Mock } from 'vitest'

import { usePagination } from './use-pagination'

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn()
}))

describe('usePagination', () => {
  const mockReplace = vi.fn()
  const mockPathname = '/test-path'
  const mockSearchParams = new URLSearchParams()

  beforeEach(() => {
    ;(useRouter as Mock).mockReturnValue({ replace: mockReplace })
    ;(usePathname as Mock).mockReturnValue(mockPathname)
    ;(useSearchParams as Mock).mockReturnValue(mockSearchParams)
  })

  it('should return default page and perPage values', () => {
    const { result } = renderHook(() => usePagination())

    expect(result.current.page).toBe(1)
    expect(result.current.perPage).toBe(10)
  })

  it('should return page and perPage values from search params', () => {
    mockSearchParams.set('page', '2')
    mockSearchParams.set('per-page', '20')

    const { result } = renderHook(() => usePagination())

    expect(result.current.page).toBe(2)
    expect(result.current.perPage).toBe(20)
  })

  it('should update page in search params', () => {
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.setPage(3)
    })

    expect(mockReplace).toHaveBeenCalledWith(`${mockPathname}?page=3&per-page=20`, {
      scroll: false
    })
  })

  it('should update perPage in search params', () => {
    mockSearchParams.set('page', '1')
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.setPerPage(15)
    })

    expect(mockReplace).toHaveBeenCalledWith(`${mockPathname}?page=1&per-page=15`, {
      scroll: false
    })
  })
})
