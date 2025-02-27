import type { createOrUpdateUserValidator } from '@/validators/users/create-or-update-user.validator'
import type { z } from 'zod'

export type CreateOrUpdateUserInputDTO = z.infer<typeof createOrUpdateUserValidator>
