import type { Controller } from '@/shared/base/controller'
import { type HttpServer, httpStatusCode, permissions } from '@/shared/base/http-server'

import type { GetUserProfileQuery } from '../queries/get-user-profile.query'

const { PRIVATE } = permissions

export class UsersControllers implements Controller {
  constructor(
    private readonly server: HttpServer,
    private readonly getUserProfileQuery: GetUserProfileQuery
  ) {}

  initialize(): void {
    this.server.get(PRIVATE, '/users/profile', async (req, res) => {
      const id = req.userId
      const data = await this.getUserProfileQuery.execute({ id })
      res.status(httpStatusCode.OK).send({ data })
    })
  }
}
