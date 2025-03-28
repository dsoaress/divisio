import type { GroupModel } from '@/modules/groups/models/group.model'
import { IdValueObject } from 'shared'

export function groupFake(overrides?: Partial<GroupModel>): GroupModel {
  return {
    id: IdValueObject.create(),
    name: 'Group Name',
    description: 'Group Description',
    currency: 'USD',
    members: [IdValueObject.create()],
    createdBy: IdValueObject.create(),
    createdAt: new Date(),
    ...overrides
  }
}
