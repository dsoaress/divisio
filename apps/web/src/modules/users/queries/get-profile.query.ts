import 'server-only'

import { api } from '@/lib/api'
import type { GetUserProfileOutputDTO, Query, QueryResult } from 'shared'

export function getUserProfileQuery(): Query<void, Promise<QueryResult<GetUserProfileOutputDTO>>> {
  return {
    async execute(): Promise<QueryResult<GetUserProfileOutputDTO>> {
      return api
        .get<QueryResult<GetUserProfileOutputDTO>>('users/profile', {
          next: { tags: ['users', 'profile'] }
        })
        .then(({ data }) => data)
    }
  }
}
