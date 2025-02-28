import { z } from 'zod'

import { idValidator } from '../id.validator'

export const removeGroupMemberValidator = z.object({
  id: idValidator,
  memberId: idValidator
})
