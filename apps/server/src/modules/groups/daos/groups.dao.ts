import type {
  GetGroupByIdInputDTO,
  GetGroupByIdOutputDTO,
  GetGroupsInputDTO,
  GetGroupsOutputDTO
} from 'shared'

export interface GroupsDAO {
  getGroupById(data: GetGroupByIdInputDTO): Promise<GetGroupByIdOutputDTO | null>
  getGroups(data: GetGroupsInputDTO): Promise<GetGroupsOutputDTO>
}
