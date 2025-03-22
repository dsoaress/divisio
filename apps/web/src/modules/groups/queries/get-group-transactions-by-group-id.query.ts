import 'server-only'

import type {
  GetGroupTransactionsByGroupIdInputDTO,
  GetGroupTransactionsByGroupIdOutputDTO,
  PaginatedQueryResult,
  Query
} from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

export function getGroupTransactionsByGroupIdQuery(
  httpRequest: HttpRequest
): Query<
  Omit<GetGroupTransactionsByGroupIdInputDTO, 'memberId'>,
  Promise<PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>>
> {
  return {
    async execute({
      groupId,
      page,
      dir,
      order,
      'per-page': perPage,
      search
    }): Promise<PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>> {
      return httpRequest.get(`groups/${groupId}/transactions`, {
        params: { page, dir, order, 'per-page': perPage, search },
        next: {
          tags: ['groups', groupId, 'transactions', String({ page, dir, order, perPage, search })]
        }
      })
    }
  }
}
