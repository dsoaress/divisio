import 'server-only'

import type { GetGroupsOutputDTO, Query, QueryResult } from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

export function getGroupsQuery(
  httpRequest: HttpRequest
): Query<void, Promise<QueryResult<GetGroupsOutputDTO>>> {
  return {
    async execute(): Promise<QueryResult<GetGroupsOutputDTO>> {
      return httpRequest.get('groups', { next: { tags: ['groups'] } })
    }
  }
}
