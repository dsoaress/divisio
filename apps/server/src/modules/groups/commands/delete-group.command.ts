import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import { type Command, type DeleteGroupDTO, deleteGroupValidator } from 'shared'
import type { GroupsRepository } from '../repositories/groups.repository'

export class DeleteGroupCommand implements Command<DeleteGroupDTO, Promise<void>> {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async execute(data: DeleteGroupDTO): Promise<void> {
    const parsedData = deleteGroupValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const { id } = parsedData.data
    const group = await this.groupsRepository.findById(id)
    if (!group) throw new NotFoundException('Group')
    await this.groupsRepository.delete(parsedData.data.id)
  }
}
