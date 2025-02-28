import { idValidator } from '../id.validator'
import { amountValidator, amountValidatorErrorMessage } from './amount.validator'
import { baseCreateGroupTransactionValidator } from './create-group-transaction.validator'

export const updateGroupTransactionValidator = baseCreateGroupTransactionValidator
  .partial()
  .omit({
    createdBy: true
  })
  .extend({
    id: idValidator,
    groupId: idValidator,
    memberId: idValidator
  })
  .refine(amountValidator, amountValidatorErrorMessage)
