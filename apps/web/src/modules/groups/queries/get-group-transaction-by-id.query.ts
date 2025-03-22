import 'server-only'

import type {
  GetGroupTransactionByIdInputDTO,
  GetGroupTransactionByIdOutputDTO,
  Query,
  QueryResult
} from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

export function getGroupTransactionByIdQuery(
  httpRequest: HttpRequest
): Query<
  Omit<GetGroupTransactionByIdInputDTO, 'memberId'>,
  Promise<QueryResult<GetGroupTransactionByIdOutputDTO>>
> {
  return {
    async execute({
      groupId,
      groupTransactionId
    }: Omit<GetGroupTransactionByIdInputDTO, 'memberId'>): Promise<
      QueryResult<GetGroupTransactionByIdOutputDTO>
    > {
      return httpRequest.get(`groups/${groupId}/transactions/${groupTransactionId}`, {
        next: { tags: ['groups', groupId, 'transactions', groupTransactionId] }
      })
    }
  }
}
