import type { deleteGroupValidator } from '@/validators/groups/delete-group.validator'
import type { z } from 'zod'

export type DeleteGroupDTO = z.infer<typeof deleteGroupValidator>
