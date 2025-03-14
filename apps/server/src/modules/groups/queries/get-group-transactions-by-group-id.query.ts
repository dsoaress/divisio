import { BadRequestException } from '@/core/exceptions/bad-request.exception'

import { paginate } from '@/lib/paginate'
import {
  type GetGroupTransactionsByGroupIdInputDTO,
  type GetGroupTransactionsByGroupIdOutputDTO,
  type PaginatedQueryResult,
  type Query,
  getGroupTransactionsByGroupIdInputValidator
} from 'shared'
import type { GroupTransactionsDAO } from '../daos/group-transactions.dao'

export class GetGroupTransactionsByGroupIdQuery
  implements
    Query<
      GetGroupTransactionsByGroupIdInputDTO,
      Promise<PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>>
    >
{
  constructor(private readonly groupTransactionsDAO: GroupTransactionsDAO) {}

  async execute(
    data: GetGroupTransactionsByGroupIdInputDTO
  ): Promise<PaginatedQueryResult<GetGroupTransactionsByGroupIdOutputDTO>> {
    const parsedData = getGroupTransactionsByGroupIdInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const { total, result } = await this.groupTransactionsDAO.getGroupTransactionsByGroupId(
      parsedData.data
    )
    return { data: result, ...paginate(total, parsedData.data['per-page']) }
  }
}
