import type { z } from 'zod'

import type { removeGroupMemberValidator } from '@/validators/groups/remove-group-member.validator'

export type RemoveGroupMemberDTO = z.infer<typeof removeGroupMemberValidator>
