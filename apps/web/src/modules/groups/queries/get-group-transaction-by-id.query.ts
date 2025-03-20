import 'server-only'

import { api } from '@/lib/api'
import type {
  GetGroupTransactionByIdInputDTO,
  GetGroupTransactionByIdOutputDTO,
  Query,
  QueryResult
} from 'shared'

export function getGroupTransactionByIdQuery(): Query<
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
      return api
        .get(`groups/${groupId}/transactions/${groupTransactionId}`, {
          next: { tags: ['groups', groupId, 'transactions', groupTransactionId] }
        })
        .then(({ data }) => data)
    }
  }
}
