import type { z } from 'zod'

import type { getGroupTransactionByIdInputValidator } from '@/validators/groups/get-group-transaction-by-id-input.validator'

export type GetGroupTransactionByIdInputDTO = z.infer<typeof getGroupTransactionByIdInputValidator>
