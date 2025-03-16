import type { Mock } from 'vitest'

import { api } from '@/lib/api'

import { getGroupsQuery } from './get-groups.query'

vi.mock('@/lib/api', () => ({
  api: { get: vi.fn() }
}))

describe('getGroupsQuery', () => {
  it('should fetch groups and return the expected data', async () => {
    ;(api.get as Mock).mockResolvedValueOnce({ data: [] })
    const query = getGroupsQuery()
    const result = await query.execute()

    expect(api.get).toHaveBeenCalledWith('groups', { next: { tags: ['groups'] } })
    expect(result).toEqual([])
  })
})
