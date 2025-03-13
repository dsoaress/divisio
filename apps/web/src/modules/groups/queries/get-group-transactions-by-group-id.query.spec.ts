import type { Mock } from 'vitest'

import { api } from '@/lib/api'
import { getGroupTransactionsByGroupIdQuery } from './get-group-transactions-by-group-id.query'

vi.mock('@/lib/api', () => ({
  api: { get: vi.fn() }
}))

describe('getGroupTransactionsByGroupIdQuery', () => {
  it('should fetch group by id and return the expected data', async () => {
    const params = {
      groupId: 'groupId',
      page: 1,
      dir: 'desc',
      order: 'date',
      'per-page': 50,
      search: 'search'
    } as const
    ;(api.get as Mock).mockResolvedValueOnce({ data: [] })
    const query = getGroupTransactionsByGroupIdQuery()
    const result = await query.execute(params)

    expect(api.get).toHaveBeenCalledWith(`groups/${params.groupId}/transactions`, {
      params: {
        page: params.page,
        dir: params.dir,
        order: params.order,
        'per-page': params['per-page'],
        search: params.search
      },
      next: {
        tags: [
          'groups',
          params.groupId,
          'transactions',
          String({
            page: params.page,
            dir: params.dir,
            order: params.order,
            perPage: params['per-page'],
            search: params.search
          })
        ]
      }
    })
    expect(result).toEqual([])
  })
})
