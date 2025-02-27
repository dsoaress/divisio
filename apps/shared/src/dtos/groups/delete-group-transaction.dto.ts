import type { deleteGroupTransactionValidator } from '@/validators/groups/delete-group-transaction.validator'
import type { z } from 'zod'

export type DeleteGroupTransactionDTO = z.infer<typeof deleteGroupTransactionValidator>
