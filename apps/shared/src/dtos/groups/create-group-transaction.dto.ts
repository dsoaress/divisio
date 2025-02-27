import type { createGroupTransactionValidator } from '@/validators/groups/create-group-transaction.validator'
import type { z } from 'zod'

export type CreateGroupTransactionDTO = z.infer<typeof createGroupTransactionValidator>
