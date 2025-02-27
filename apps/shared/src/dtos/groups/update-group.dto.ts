import type { updateGroupValidator } from '@/validators/groups/update-group.validator'
import type { z } from 'zod'

export type UpdateGroupDTO = z.infer<typeof updateGroupValidator>
