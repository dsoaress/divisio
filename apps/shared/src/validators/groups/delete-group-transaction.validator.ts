import { z } from 'zod'

import { idValidator } from '../id.validator'

export const deleteGroupTransactionValidator = z.object({
  id: idValidator
})
