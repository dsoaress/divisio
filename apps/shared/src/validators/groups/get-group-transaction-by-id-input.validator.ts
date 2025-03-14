import { z } from 'zod'

import { idValidator } from '../id.validator'

export const getGroupTransactionByIdInputValidator = z.object({
  groupTransactionId: idValidator,
  groupId: idValidator,
  memberId: idValidator
})
