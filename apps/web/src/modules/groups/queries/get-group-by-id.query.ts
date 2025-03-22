import 'server-only'

import type { GetGroupByIdInputDTO, GetGroupByIdOutputDTO, Query, QueryResult } from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

export function getGroupByIdQuery(
  httpRequest: HttpRequest
): Query<Pick<GetGroupByIdInputDTO, 'id'>, Promise<QueryResult<GetGroupByIdOutputDTO>>> {
  return {
    async execute({ id }): Promise<QueryResult<GetGroupByIdOutputDTO>> {
      return httpRequest.get(`groups/${id}`, {
        next: { tags: ['groups', id] }
      })
    }
  }
}
