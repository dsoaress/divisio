import type { Command } from '@/core/base/command'
import { BadRequestException } from '@/core/exceptions/bad-request.exception'
import {
  type CreateOrUpdateUserInputDTO,
  type CreateOrUpdateUserOutputDTO,
  IdValueObject,
  createOrUpdateUserValidator
} from 'shared'
import type { UsersRepository } from '../repositories/users.repository'

export class CreateOrUpdateUserCommand
  implements Command<CreateOrUpdateUserInputDTO, Promise<CreateOrUpdateUserOutputDTO>>
{
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(data: CreateOrUpdateUserInputDTO): Promise<CreateOrUpdateUserOutputDTO> {
    const parsedData = createOrUpdateUserValidator.safeParse(data)
    if (!parsedData.success) throw new BadRequestException(parsedData.error)
    return this.usersRepository.createOrUpdate({
      id: IdValueObject.create(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      avatar: data.avatar,
      createdAt: new Date()
    })
  }
}
