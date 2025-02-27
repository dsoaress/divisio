import { z } from 'zod'
import { idValidator } from '../id.validator'

export const joinGroupValidator = z.object({
  id: idValidator,
  memberId: idValidator
})
