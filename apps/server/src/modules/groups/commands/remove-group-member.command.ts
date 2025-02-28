import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import { NotFoundException } from '@/core/exceptions/not-found.exception'

import { type Command, type RemoveGroupMemberDTO, removeGroupMemberValidator } from 'shared'
import type { GroupsRepository } from '../repositories/groups.repository'

export class RemoveGroupMemberCommand implements Command<RemoveGroupMemberDTO, Promise<void>> {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async execute(data: RemoveGroupMemberDTO): Promise<void> {
    const parsedData = removeGroupMemberValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    const { id, memberId } = parsedData.data
    const group = await this.groupsRepository.findById(id)
    if (!group) throw new NotFoundException('Group')
    const member = group.members.find(member => member.value === memberId)
    if (!member) throw new NotFoundException('Member')
    await this.groupsRepository.removeGroupMember(id, memberId)
  }
}
