import { api } from '@/lib/api'
import type { GetGroupByIdInputDTO, GetGroupByIdOutputDTO, Query, QueryResult } from 'shared'

import type { GetGroupByIdDTO } from '../dtos/get-group-by-id.dto'

export function getGroupByIdQuery(): Query<
  Pick<GetGroupByIdInputDTO, 'id'>,
  Promise<GetGroupByIdDTO>
> {
  return {
    async execute({ id }: GetGroupByIdInputDTO): Promise<GetGroupByIdDTO> {
      return api
        .get<QueryResult<GetGroupByIdOutputDTO>>(`groups/${id}`, { next: { tags: ['groups', id] } })
        .then(({ data }) => data)
    }
  }
}
