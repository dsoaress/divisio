import type { Command } from 'shared'

import type { HttpRequest } from '@/core/base/http-request'

type Result = {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export function refreshSessionCommand(
  httpRequest: HttpRequest
): Command<{ refreshToken: string }, Promise<Result>> {
  return {
    async execute({ refreshToken }): Promise<Result> {
      return httpRequest.post('/sessions/refresh', { refreshToken })
    }
  }
}
