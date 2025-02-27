import type { Model } from '@/core/base/model'
import type { IdValueObject } from 'shared'

export interface SessionModel extends Omit<Model, 'createdBy'> {
  userId: IdValueObject
  expiresAt: Date
}
