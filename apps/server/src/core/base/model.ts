import type { IdValueObject } from 'shared'

export interface Model {
  id: IdValueObject
  createdBy: IdValueObject
  createdAt: Date
  updatedBy?: IdValueObject
  updatedAt?: Date
}
