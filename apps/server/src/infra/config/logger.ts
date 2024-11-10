import { env } from './env'

export const logger =
  {
    local: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        }
      }
    },
    development: true,
    production: true,
    test: false
  }[env.NODE_ENV] ?? true
