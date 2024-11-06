import type { z } from 'zod'

import type { getGroupTransactionByIdInputValidator } from '../validators/get-group-transaction-by-id-input.validator'

export type GetGroupTransactionByIdInputDto = z.infer<typeof getGroupTransactionByIdInputValidator>
