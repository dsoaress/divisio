import { z } from 'zod'
import { idValidator } from '../id.validator'

export const getGroupsInputValidator = z.object({
  memberId: idValidator
})
