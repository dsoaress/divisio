import type {
  GetGroupTransactionByIdInputDTO,
  GetGroupTransactionByIdOutputDTO,
  GetGroupTransactionsByGroupIdInputDTO,
  GetGroupTransactionsByGroupIdOutputDTO
} from 'shared'

export interface GroupTransactionsDAO {
  getGroupTransactionById(
    data: GetGroupTransactionByIdInputDTO
  ): Promise<GetGroupTransactionByIdOutputDTO | null>
  getGroupTransactionsByGroupId(data: GetGroupTransactionsByGroupIdInputDTO): Promise<{
    total: number
    result: GetGroupTransactionsByGroupIdOutputDTO
  }>
}
