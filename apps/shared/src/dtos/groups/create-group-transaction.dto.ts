import type { z } from 'zod'

import type { createGroupTransactionValidator } from '@/validators/groups/create-group-transaction.validator'

export type CreateGroupTransactionDTO = z.infer<typeof createGroupTransactionValidator>
