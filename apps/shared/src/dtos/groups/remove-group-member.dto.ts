import type { removeGroupMemberValidator } from '@/validators/groups/remove-group-member.validator'
import type { z } from 'zod'

export type RemoveGroupMemberDTO = z.infer<typeof removeGroupMemberValidator>
