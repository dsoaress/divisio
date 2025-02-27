import type { getGroupTransactionByIdInputValidator } from '@/validators/groups/get-group-transaction-by-id-input.validator'
import type { z } from 'zod'

export type GetGroupTransactionByIdInputDTO = z.infer<typeof getGroupTransactionByIdInputValidator>
