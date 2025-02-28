import type { z } from 'zod'

import type { currencyValidator } from '@/validators/groups/currency.validator'

export type CurrencyDTO = z.infer<typeof currencyValidator>
