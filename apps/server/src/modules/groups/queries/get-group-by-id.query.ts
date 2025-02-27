import type { Query } from '@/core/base/query'
import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import {
  type GetGroupByIdInputDTO,
  type GetGroupByIdOutputDTO,
  getGroupByIdInputValidator
} from 'shared'
import type { GroupsDAO } from '../daos/groups.dao'

export class GetGroupByIdQuery
  implements Query<GetGroupByIdInputDTO, Promise<GetGroupByIdOutputDTO>>
{
  constructor(private readonly groupsDAO: GroupsDAO) {}

  async execute(data: GetGroupByIdInputDTO): Promise<GetGroupByIdOutputDTO> {
    const parsedData = getGroupByIdInputValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const group = await this.groupsDAO.getGroupById(parsedData.data)
    if (!group) throw new NotFoundException('Group')
    return group
  }
}
