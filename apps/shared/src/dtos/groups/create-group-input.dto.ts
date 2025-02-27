import type { createGroupValidator } from '@/validators/groups/create-group.validator'
import type { z } from 'zod'

export type CreateGroupInputDTO = z.infer<typeof createGroupValidator>
