import { z } from 'zod'

import { CONSTANTS } from '@/config/constants'

export const searchParamsValidator = z.object({
  [CONSTANTS.PAGE]: z
    .string()
    .refine(value => +value > 0)
    .default(CONSTANTS.DEFAULT_PAGE)
    .catch(CONSTANTS.DEFAULT_PAGE)
    .transform(value => +value),
  [CONSTANTS.PER_PAGE]: z
    .enum(CONSTANTS.PER_PAGE_OPTIONS as [string])
    .default(CONSTANTS.DEFAULT_PER_PAGE)
    .catch(CONSTANTS.DEFAULT_PER_PAGE)
    .transform(value => +value),
  [CONSTANTS.DIR]: z
    .enum(CONSTANTS.DIR_OPTIONS)
    .default(CONSTANTS.DEFAULT_DIR)
    .catch(CONSTANTS.DEFAULT_DIR),
  [CONSTANTS.SEARCH]: z.string().optional()
})
