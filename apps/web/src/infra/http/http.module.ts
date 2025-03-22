import { getGroupByIdQuery } from '@/modules/groups/queries/get-group-by-id.query'
import { getGroupTransactionByIdQuery } from '@/modules/groups/queries/get-group-transaction-by-id.query'
import { getGroupTransactionsByGroupIdQuery } from '@/modules/groups/queries/get-group-transactions-by-group-id.query'
import { getGroupsQuery } from '@/modules/groups/queries/get-groups.query'
import { refreshSessionCommand } from '@/modules/session/commands/refresh-session.command'
import { getUserProfileQuery } from '@/modules/users/queries/get-profile.query'

import { xiorHttpRequest } from '../adapters/http-request/xior/xior-http-request.adapter'

type Output = {
  getGroupById: ReturnType<typeof getGroupByIdQuery>
  getGroupTransactionById: ReturnType<typeof getGroupTransactionByIdQuery>
  getGroupTransactionsByGroupId: ReturnType<typeof getGroupTransactionsByGroupIdQuery>
  getGroups: ReturnType<typeof getGroupsQuery>
  getUserProfile: ReturnType<typeof getUserProfileQuery>
  refreshSession: ReturnType<typeof refreshSessionCommand>
}

export function httpModule(): Output {
  const httpRequest = xiorHttpRequest()

  return {
    getGroupById: getGroupByIdQuery(httpRequest),
    getGroupTransactionById: getGroupTransactionByIdQuery(httpRequest),
    getGroupTransactionsByGroupId: getGroupTransactionsByGroupIdQuery(httpRequest),
    getGroups: getGroupsQuery(httpRequest),
    getUserProfile: getUserProfileQuery(httpRequest),

    refreshSession: refreshSessionCommand(httpRequest)
  }
}
