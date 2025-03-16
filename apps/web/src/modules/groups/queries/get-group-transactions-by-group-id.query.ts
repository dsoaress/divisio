import type {
  GetGroupTransactionsByGroupIdInputDTO,
  GetGroupTransactionsByGroupIdOutputDTO,
  PaginatedQueryResult,
  Query
} from 'shared'

import { api } from '@/lib/api'

export function getGroupTransactionsByGroupIdQuery(): Query<
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
    }: Omit<GetGroupTransactionsByGroupIdInputDTO, 'memberId'>): Promise<
      PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>
    > {
      return api
        .get<PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>>(
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
