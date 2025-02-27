import type { joinGroupValidator } from '@/validators/groups/join-group.validator'
import type { z } from 'zod'

export type JoinGroupDTO = z.infer<typeof joinGroupValidator>
