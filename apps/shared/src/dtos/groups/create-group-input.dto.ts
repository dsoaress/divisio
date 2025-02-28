import type { z } from 'zod'

import type { createGroupValidator } from '@/validators/groups/create-group.validator'

export type CreateGroupInputDTO = z.infer<typeof createGroupValidator>
