import type { Model } from '@/core/base/model'
import type { IdValueObject } from 'shared'

export interface GroupTransactionModel extends Model {
  name: string
  amount: number
  groupId: IdValueObject
  payerMemberId: IdValueObject
  participants: {
    memberId: IdValueObject
    amount: number
  }[]
  date: Date
}
