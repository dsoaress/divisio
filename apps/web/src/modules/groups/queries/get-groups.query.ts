import type { GetGroupsOutputDTO, Query, QueryResult } from 'shared'

import { api } from '@/lib/api'

export function getGroupsQuery(): Query<void, Promise<QueryResult<GetGroupsOutputDTO>>> {
  return {
    async execute(): Promise<QueryResult<GetGroupsOutputDTO>> {
      return api
        .get<QueryResult<GetGroupsOutputDTO>>('groups', {
          next: { tags: ['groups'] }
        })
        .then(({ data }) => data)
    }
  }
}
