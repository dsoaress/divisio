import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import {
  type GetGroupTransactionByIdInputDTO,
  type GetGroupTransactionByIdOutputDTO,
  type Query,
  type QueryResult,
  getGroupTransactionByIdInputValidator
} from 'shared'
import type { GroupTransactionsDAO } from '../daos/group-transactions.dao'

export class GetGroupTransactionByIdQuery
  implements
    Query<GetGroupTransactionByIdInputDTO, Promise<QueryResult<GetGroupTransactionByIdOutputDTO>>>
{
  constructor(private readonly groupTransactionsDAO: GroupTransactionsDAO) {}

  async execute(
    data: GetGroupTransactionByIdInputDTO
  ): Promise<QueryResult<GetGroupTransactionByIdOutputDTO>> {
    const parsedData = getGroupTransactionByIdInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const groupTransaction = await this.groupTransactionsDAO.getGroupTransactionById(
      parsedData.data
    )
    if (!groupTransaction) throw new NotFoundException('GroupTransaction')
    return { data: groupTransaction }
  }
}
