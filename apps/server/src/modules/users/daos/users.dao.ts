import type { GetUserProfileOutputDTO } from 'shared'

export interface UsersDAO {
  getUserById(id: string): Promise<GetUserProfileOutputDTO | null>
}
