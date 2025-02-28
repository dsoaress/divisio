import type { z } from 'zod'

import type { joinGroupValidator } from '@/validators/groups/join-group.validator'

export type JoinGroupDTO = z.infer<typeof joinGroupValidator>
