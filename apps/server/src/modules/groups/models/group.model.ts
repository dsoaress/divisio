import type { Model } from '@/core/base/model'
import type { CurrencyDTO, IdValueObject } from 'shared'

export interface GroupModel extends Model {
  name: string
  description: string
  currency: CurrencyDTO
  members: IdValueObject[]
}
