import { act, renderHook } from '@testing-library/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Mock } from 'vitest'

import { useSearch } from './use-search'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn(),
  useSearchParams: vi.fn()
}))

describe('useSearch', () => {
  const mockReplace = vi.fn()
  const mockPathname = '/test-path'

  beforeEach(() => {
    ;(usePathname as Mock).mockReturnValue(mockPathname)
    ;(useRouter as Mock).mockReturnValue({ replace: mockReplace })
    ;(useSearchParams as Mock).mockReturnValue(new URLSearchParams())
  })

  it('should return the current search parameter', () => {
    ;(useSearchParams as Mock).mockReturnValue(new URLSearchParams('search=test'))

    const { result } = renderHook(() => useSearch())

    expect(result.current.search).toBe('test')
  })

  it('should set a new search parameter', () => {
    ;(useSearchParams as Mock).mockReturnValue(new URLSearchParams('search=test'))

    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setSearch('new-search')
    })

    expect(mockReplace).toHaveBeenCalledWith(`${mockPathname}?search=new-search`, { scroll: false })
  })

  it('should handle empty search parameter', () => {
    ;(useSearchParams as Mock).mockReturnValue(new URLSearchParams(''))

    const { result } = renderHook(() => useSearch())

    expect(result.current.search).toBe('')
  })
})
