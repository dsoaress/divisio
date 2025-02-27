import type {
  GetGroupByIdInputDTO,
  GetGroupByIdOutputDTO,
  GetGroupsInputDTO,
  GetGroupsOutputDTO
} from 'shared'

export interface GroupsDAO {
  getGroupById({ id, memberId }: GetGroupByIdInputDTO): Promise<GetGroupByIdOutputDTO | null>
  getGroups({ memberId }: GetGroupsInputDTO): Promise<GetGroupsOutputDTO>
}
