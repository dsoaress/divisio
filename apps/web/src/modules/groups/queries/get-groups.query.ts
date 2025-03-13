import type { GetGroupsOutputDTO, Query, QueryResult } from 'shared'

import { api } from '@/lib/api'
import type { GetGroupsDTO } from '../dtos/get-groups.dto'

export function getGroupsQuery(): Query<void, Promise<GetGroupsDTO>> {
  return {
    async execute(): Promise<GetGroupsDTO> {
      return api
        .get<QueryResult<GetGroupsOutputDTO>>('groups', { next: { tags: ['groups'] } })
        .then(({ data }) => data)
    }
  }
}
