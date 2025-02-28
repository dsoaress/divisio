import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import {
  type GetGroupTransactionByIdInputDTO,
  type GetGroupTransactionByIdOutputDTO,
  type Query,
  getGroupTransactionByIdInputValidator
} from 'shared'
import type { GroupTransactionsDAO } from '../daos/group-transactions.dao'

export class GetGroupTransactionByIdQuery
  implements Query<GetGroupTransactionByIdInputDTO, Promise<GetGroupTransactionByIdOutputDTO>>
{
  constructor(private readonly groupTransactionsDAO: GroupTransactionsDAO) {}

  async execute(data: GetGroupTransactionByIdInputDTO): Promise<GetGroupTransactionByIdOutputDTO> {
    const parsedData = getGroupTransactionByIdInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const groupTransaction = await this.groupTransactionsDAO.getGroupTransactionById(
      parsedData.data
    )
    if (!groupTransaction) throw new NotFoundException('GroupTransaction')
    return groupTransaction
  }
}
