import type { getGroupByIdInputValidator } from '@/validators/groups/get-group-by-id-input.validator'
import type { z } from 'zod'

export type GetGroupByIdInputDTO = z.infer<typeof getGroupByIdInputValidator>
