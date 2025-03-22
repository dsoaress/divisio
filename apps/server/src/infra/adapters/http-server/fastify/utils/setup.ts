import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import { env } from '@/infra/config/env'

import { CONSTANTS } from '@/infra/config/constants'
import type { FastifyInstance } from 'fastify'
import { errorHandler } from './error-handler.middleware'
import { healthCheckHandler } from './health-checker.handler'

export function setup(server: FastifyInstance): void {
  server.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    sign: {
      expiresIn: CONSTANTS.COOKIES.ACCESS_TOKEN_MAX_AGE + 5 // 5 seconds of tolerance
    }
  })
  server.register(fastifyCors, { origin: '*' })
  server.get('/health-check', healthCheckHandler)
  server.setErrorHandler(errorHandler)
}
