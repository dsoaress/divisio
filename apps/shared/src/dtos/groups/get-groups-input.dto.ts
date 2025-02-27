import type { getGroupsInputValidator } from '@/validators/groups/get-groups-input.validator'
import type { z } from 'zod'

export type GetGroupsInputDTO = z.infer<typeof getGroupsInputValidator>
