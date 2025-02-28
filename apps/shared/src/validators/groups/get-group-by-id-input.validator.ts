import { z } from 'zod'

import { idValidator } from '../id.validator'

export const getGroupByIdInputValidator = z.object({
  id: idValidator,
  memberId: idValidator
})
