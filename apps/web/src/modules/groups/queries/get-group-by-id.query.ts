import { api } from '@/lib/api'
import type { GetGroupByIdInputDTO, GetGroupByIdOutputDTO, Query, QueryResult } from 'shared'

export function getGroupByIdQuery(): Query<
  Pick<GetGroupByIdInputDTO, 'id'>,
  Promise<QueryResult<GetGroupByIdOutputDTO>>
> {
  return {
    async execute({ id }: GetGroupByIdInputDTO): Promise<QueryResult<GetGroupByIdOutputDTO>> {
      return api
        .get<QueryResult<GetGroupByIdOutputDTO>>(`groups/${id}`, {
          next: { tags: ['groups', id], revalidate: 60 }
        })
        .then(({ data }) => data)
    }
  }
}
