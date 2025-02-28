import type { z } from 'zod'

import type { deleteGroupValidator } from '@/validators/groups/delete-group.validator'

export type DeleteGroupDTO = z.infer<typeof deleteGroupValidator>
