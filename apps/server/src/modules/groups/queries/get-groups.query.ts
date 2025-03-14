import { BadRequestException } from '@/core/exceptions/bad-request.exception'

import {
  type GetGroupsInputDTO,
  type GetGroupsOutputDTO,
  type Query,
  type QueryResult,
  getGroupsInputValidator
} from 'shared'
import type { GroupsDAO } from '../daos/groups.dao'

export class GetGroupsQuery
  implements Query<GetGroupsInputDTO, Promise<QueryResult<GetGroupsOutputDTO>>>
{
  constructor(private readonly groupsDAO: GroupsDAO) {}

  async execute(data: GetGroupsInputDTO): Promise<QueryResult<GetGroupsOutputDTO>> {
    const parsedData = getGroupsInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const groups = await this.groupsDAO.getGroups(parsedData.data)
    return { data: groups }
  }
}
