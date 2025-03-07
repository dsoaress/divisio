import { BadRequestException } from '@/core/exceptions/bad-request.exception'

import {
  type GetGroupsInputDTO,
  type GetGroupsOutputDTO,
  type Query,
  getGroupsInputValidator
} from 'shared'
import type { GroupsDAO } from '../daos/groups.dao'

export class GetGroupsQuery implements Query<GetGroupsInputDTO, Promise<GetGroupsOutputDTO>> {
  constructor(private readonly groupsDAO: GroupsDAO) {}

  async execute(data: GetGroupsInputDTO): Promise<GetGroupsOutputDTO> {
    const parsedData = getGroupsInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    return this.groupsDAO.getGroups(parsedData.data)
  }
}
