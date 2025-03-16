import type { Controller } from '@/core/base/controller'
import { type HttpServer, httpStatusCode, permissions } from '@/core/base/http-server'
import { CONSTANTS } from '@/infra/config/constants'
import { env } from '@/infra/config/env'
import type { CreateOrUpdateUserCommand } from '@/modules/users/commands/create-or-update-user.command'
import type { CreateSessionCommand } from '@/modules/users/commands/create-session.command'
import type { RefreshSessionCommand } from '@/modules/users/commands/refresh-session.command'
import type { GoogleOAuthService } from '@/modules/users/services/google-oauth.service'

const { PUBLIC } = permissions

export class SessionsController implements Controller {
  constructor(
    private readonly server: HttpServer,
    private readonly createOrUpdateUserCommand: CreateOrUpdateUserCommand,
    private readonly createSessionCommand: CreateSessionCommand,
    private readonly refreshSessionCommand: RefreshSessionCommand,
    private readonly googleOAuthService: GoogleOAuthService
  ) {}

  initialize(): void {
    this.server.get(PUBLIC, '/sessions/oauth/google', async (req, res) => {
      try {
        const { code } = req.query
        const userInfo = await this.googleOAuthService.execute(code)
        const { id: userId } = await this.createOrUpdateUserCommand.execute(userInfo)
        const accessToken = this.server.signJwt({ sub: userId })
        const { id: refreshToken } = await this.createSessionCommand.execute({
          userId,
          maxAge: CONSTANTS.COOKIES.REFRESH_TOKEN_MAX_AGE
        })
        const searchParams = new URLSearchParams({ accessToken, refreshToken })
        res
          .status(httpStatusCode.REDIRECT)
          .redirect(`${env.WEB_URL}/api/login?${searchParams.toString()}`)
      } catch {
        res.status(httpStatusCode.REDIRECT).redirect(`${env.WEB_URL}/login`)
      }
    })

    this.server.post<{ body: { refreshToken: string } }>(
      PUBLIC,
      '/sessions/refresh',
      async (req, res) => {
        const { refreshToken } = req.body
        const { sessionId, userId } = await this.refreshSessionCommand.execute(refreshToken)
        const accessToken = this.server.signJwt({ sub: userId })
        res.status(httpStatusCode.OK).send({ data: { accessToken, refreshToken: sessionId } })
      }
    )
  }
}
