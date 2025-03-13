import type { Mock } from 'vitest'

import { api } from '@/lib/api'

import { getGroupByIdQuery } from './get-group-by-id.query'

vi.mock('@/lib/api', () => ({
  api: { get: vi.fn() }
}))

describe('getGroupByIdQuery', () => {
  it('should fetch group by id and return the expected data', async () => {
    const id = 'id'
    ;(api.get as Mock).mockResolvedValueOnce({ data: {} })
    const query = getGroupByIdQuery()
    const result = await query.execute({ id })

    expect(api.get).toHaveBeenCalledWith(`groups/${id}`, { next: { tags: ['groups', id] } })
    expect(result).toEqual({})
  })
})
