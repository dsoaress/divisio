import type { updateGroupTransactionValidator } from '@/validators/groups/update-group-transaction.validator'
import type { z } from 'zod'

export type UpdateGroupTransactionDTO = z.infer<typeof updateGroupTransactionValidator>
