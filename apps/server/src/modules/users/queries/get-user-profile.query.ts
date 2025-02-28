import { NotFoundException } from '@/core/exceptions/not-found.exception'

import type { GetUserProfileInputDTO, GetUserProfileOutputDTO, Query } from 'shared'
import type { UsersDAO } from '../daos/users.dao'

export class GetUserProfileQuery
  implements Query<GetUserProfileInputDTO, Promise<GetUserProfileOutputDTO>>
{
  constructor(private readonly usersDAO: UsersDAO) {}

  async execute(data: GetUserProfileInputDTO): Promise<GetUserProfileOutputDTO> {
    const user = await this.usersDAO.getUserById(data.id)
    if (!user) throw new NotFoundException('User')
    return user
  }
}
