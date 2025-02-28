import { BadRequestException } from '@/core/exceptions/bad-request.exception'

import {
  type Command,
  type CreateGroupInputDTO,
  type CreateGroupOutputDTO,
  IdValueObject,
  createGroupValidator
} from 'shared'
import type { GroupModel } from '../models/group.model'
import type { GroupsRepository } from '../repositories/groups.repository'

export class CreateGroupCommand
  implements Command<CreateGroupInputDTO, Promise<CreateGroupOutputDTO>>
{
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async execute(data: CreateGroupInputDTO): Promise<CreateGroupOutputDTO> {
    const parsedData = createGroupValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const group: GroupModel = {
      id: IdValueObject.create(),
      name: parsedData.data.name,
      currency: parsedData.data.currency,
      members: [],
      createdBy: IdValueObject.create(data.createdBy),
      createdAt: new Date()
    }
    return this.groupsRepository.create(group)
  }
}
