import type { z } from 'zod'

import type { getGroupByIdInputValidator } from '@/validators/groups/get-group-by-id-input.validator'

export type GetGroupByIdInputDTO = z.infer<typeof getGroupByIdInputValidator>
