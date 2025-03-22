import { envValidator } from 'shared'

const parsedEnv = envValidator
  .pick({
    APP_ENV: true,
    JWT_SECRET: true,
    WEB_PORT: true,
    SERVER_URL: true,
    WEB_URL: true,
    PUBLIC_SERVER_URL: true,
    COOKIE_DOMAIN: true
  })
  .safeParse(process.env)

if (!parsedEnv.success) throw new Error(JSON.stringify(parsedEnv.error, null, 2))

export const env = parsedEnv.data
