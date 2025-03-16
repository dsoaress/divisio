import { z } from 'zod'

import { CONSTANTS } from '@/config/constants'
import { searchParamsValidator } from '@/validators/search-params.validator'

export const groupsByIdSearchParamsValidator = searchParamsValidator.extend({
  [CONSTANTS.ORDER]: z
    .enum(CONSTANTS.GROUP_ID.ORDER_OPTIONS)
    .default(CONSTANTS.GROUP_ID.DEFAULT_ORDER)
    .catch(CONSTANTS.GROUP_ID.DEFAULT_ORDER)
})
