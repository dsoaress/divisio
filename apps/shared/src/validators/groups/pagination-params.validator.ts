import { z } from 'zod'

export const paginationParamsValidator = z.object({
  page: z
    .string()
    .transform(value => +value)
    .refine(value => value > 0, {
      message: 'Page must be greater than 0'
    }),
  'per-page': z
    .string()
    .transform(value => +value)
    .refine(value => value > 0, {
      message: 'Limit must be greater than 0'
    })
})
