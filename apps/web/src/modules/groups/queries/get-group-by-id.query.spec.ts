import type { HttpRequest } from '@/core/base/http-request'

import { getGroupByIdQuery } from './get-group-by-id.query'

describe('getGroupByIdQuery', () => {
  let query: ReturnType<typeof getGroupByIdQuery>
  let httpRequest: HttpRequest
  const getMock = vi.fn()

  beforeEach(() => {
    httpRequest = { get: getMock } as unknown as HttpRequest
    query = getGroupByIdQuery(httpRequest)
  })

  it('should fetch group by id and return the expected data', async () => {
    const id = 'id'
    getMock.mockResolvedValueOnce({ data: {} })
    const result = await query.execute({ id })

    expect(getMock).toHaveBeenCalledWith(`groups/${id}`, {
      next: { tags: ['groups', id] }
    })
    expect(result).toEqual({ data: {} })
  })
})
