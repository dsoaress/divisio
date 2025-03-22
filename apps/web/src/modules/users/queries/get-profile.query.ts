import 'server-only'

import type { GetUserProfileOutputDTO, Query, QueryResult } from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

export function getUserProfileQuery(
  httpRequest: HttpRequest
): Query<void, Promise<QueryResult<GetUserProfileOutputDTO>>> {
  return {
    async execute(): Promise<QueryResult<GetUserProfileOutputDTO>> {
      return httpRequest.get('users/profile', {
        next: { tags: ['users', 'profile'] }
      })
    }
  }
}
