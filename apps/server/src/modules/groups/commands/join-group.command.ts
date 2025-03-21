import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { ConflictException } from '@/core/exceptions/conflict.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import { type Command, type JoinGroupDTO, joinGroupValidator } from 'shared'
import type { GroupsRepository } from '../repositories/groups.repository'

export class JoinGroupCommand implements Command<JoinGroupDTO, Promise<void>> {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async execute(data: JoinGroupDTO): Promise<void> {
    const parsedData = joinGroupValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const { id, memberId } = parsedData.data
    const group = await this.groupsRepository.findById(id)
    if (!group) throw new NotFoundException('Group')
    const member = group.members.find(member => member.value === memberId)
    if (member) throw new ConflictException('Member')
    await this.groupsRepository.addGroupMember(id, memberId)
  }
}
