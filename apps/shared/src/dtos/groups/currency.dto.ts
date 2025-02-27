import type { currencyValidator } from '@/validators/groups/currency.validator'
import type { z } from 'zod'

export type CurrencyDTO = z.infer<typeof currencyValidator>
