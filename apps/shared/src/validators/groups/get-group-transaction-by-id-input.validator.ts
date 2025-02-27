import { z } from 'zod'

import { idValidator } from '../id.validator'

export const getGroupTransactionByIdInputValidator = z.object({
  id: idValidator,
  memberId: idValidator
})
