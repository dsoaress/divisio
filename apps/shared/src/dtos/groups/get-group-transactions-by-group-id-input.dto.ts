import type { getGroupTransactionsByGroupIdInputValidator } from '@/validators/groups/get-group-transactions-by-group-id-input.validator'
import type { z } from 'zod'

export type GetGroupTransactionsByGroupIdInputDTO = z.infer<
  typeof getGroupTransactionsByGroupIdInputValidator
>
