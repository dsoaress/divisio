import type {
  GetGroupTransactionsByGroupIdInputDTO,
  GetGroupTransactionsByGroupIdOutputDTO,
  Query,
  QueryResult
} from 'shared'

import { api } from '@/lib/api'

import type { GetGroupTransactionsByGroupIdDTO } from '../dtos/get-group-transactions-by-group-id.dto'

export function getGroupTransactionsByGroupIdQuery(): Query<
  Omit<GetGroupTransactionsByGroupIdInputDTO, 'memberId'>,
  Promise<GetGroupTransactionsByGroupIdDTO>
> {
  return {
    async execute({
      groupId,
      page,
      dir,
      order,
      'per-page': perPage,
      search
    }: Omit<
      GetGroupTransactionsByGroupIdInputDTO,
      'memberId'
    >): Promise<GetGroupTransactionsByGroupIdDTO> {
      return api
        .get<QueryResult<GetGroupTransactionsByGroupIdOutputDTO>>(
          `groups/${groupId}/transactions`,
          {
            params: { page, dir, order, 'per-page': perPage, search },
            next: {
              tags: [
                'groups',
                groupId,
                'transactions',
                String({ page, dir, order, perPage, search })
              ]
            }
          }
        )
        .then(({ data }) => data)
    }
  }
}
