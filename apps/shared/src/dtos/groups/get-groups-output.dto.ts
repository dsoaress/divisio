export type GetGroupsOutputDTO = {
  id: string
  name: string
  description: string
  currency: string
  balance: number
  lastUpdateAt: string
  members: {
    memberId: string
    firstName: string
    lastName: string
    avatar: string | null
  }[]
}[]
