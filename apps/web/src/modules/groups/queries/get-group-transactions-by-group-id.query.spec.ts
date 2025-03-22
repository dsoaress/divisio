import type { HttpRequest } from '@/core/base/http-request'

import { getGroupTransactionsByGroupIdQuery } from './get-group-transactions-by-group-id.query'

vi.mock('@/lib/api', () => ({
  api: { get: vi.fn() }
}))

describe('getGroupTransactionsByGroupIdQuery', () => {
  let query: ReturnType<typeof getGroupTransactionsByGroupIdQuery>
  let httpRequest: HttpRequest
  const getMock = vi.fn()

  beforeEach(() => {
    httpRequest = { get: getMock } as unknown as HttpRequest
    query = getGroupTransactionsByGroupIdQuery(httpRequest)
  })

  it('should fetch group by id and return the expected data', async () => {
    const params = {
      groupId: 'groupId',
      page: 1,
      dir: 'desc',
      order: 'date',
      'per-page': 50,
      search: 'search'
    } as const
    getMock.mockResolvedValueOnce({ data: [] })
    const result = await query.execute(params)

    expect(getMock).toHaveBeenCalledWith(`groups/${params.groupId}/transactions`, {
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
    expect(result).toEqual({ data: [] })
  })
})
