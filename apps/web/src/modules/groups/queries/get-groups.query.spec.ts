import type { HttpRequest } from '@/core/base/http-request'

import { getGroupsQuery } from './get-groups.query'

describe('getGroupsQuery', () => {
  let query: ReturnType<typeof getGroupsQuery>
  let httpRequest: HttpRequest
  const getMock = vi.fn()

  beforeEach(() => {
    httpRequest = { get: getMock } as unknown as HttpRequest
    query = getGroupsQuery(httpRequest)
  })

  it('should fetch groups and return the expected data', async () => {
    getMock.mockResolvedValueOnce({ data: [] })
    const result = await query.execute()

    expect(getMock).toHaveBeenCalledWith('groups', { next: { tags: ['groups'] } })
    expect(result).toEqual({ data: [] })
  })
})
