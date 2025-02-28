import { z } from 'zod'

import { idValidator } from '../id.validator'

export const deleteGroupValidator = z.object({
  id: idValidator
})
