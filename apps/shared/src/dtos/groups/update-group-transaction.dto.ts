import type { z } from 'zod'

import type { updateGroupTransactionValidator } from '@/validators/groups/update-group-transaction.validator'

export type UpdateGroupTransactionDTO = z.infer<typeof updateGroupTransactionValidator>
