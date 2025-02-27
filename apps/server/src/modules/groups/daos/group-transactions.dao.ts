import type {
  GetGroupTransactionByIdInputDTO,
  GetGroupTransactionByIdOutputDTO,
  GetGroupTransactionsByGroupIdInputDTO,
  GetGroupTransactionsByGroupIdOutputDTO
} from 'shared'

export interface GroupTransactionsDAO {
  getGroupTransactionById({
    id,
    memberId
  }: GetGroupTransactionByIdInputDTO): Promise<GetGroupTransactionByIdOutputDTO | null>
  getGroupTransactionsByGroupId({
    groupId,
    memberId
  }: GetGroupTransactionsByGroupIdInputDTO): Promise<GetGroupTransactionsByGroupIdOutputDTO>
}
