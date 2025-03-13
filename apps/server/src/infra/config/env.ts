import { z } from 'zod'

const envSchema = z
  .object({
    NODE_ENV: z.enum(['ci', 'test', 'local', 'staging', 'production']),
    SERVER_PORT: z.coerce.number(),
    JWT_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    REDIS_URL: z.string().url(),
    WEB_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    GOOGLE_OAUTH_REDIRECT_URL: z.string().url()
  })
  .refine(data => {
    const isCIEnv = data.NODE_ENV === 'ci' || data.NODE_ENV === 'test'
    const isLocalEnv = data.NODE_ENV === 'local'
    const isProductionOrStagingEnv = data.NODE_ENV === 'staging' || data.NODE_ENV === 'production'
    const hasGoogleOAuth = Boolean(data.GOOGLE_CLIENT_ID && data.GOOGLE_CLIENT_SECRET)
    if (isCIEnv) return true
    if (isProductionOrStagingEnv && !hasGoogleOAuth) return false
    if (isLocalEnv && !hasGoogleOAuth) {
      console.info(
        'Google OAuth 2.0 is not configured, please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to enable Google OAuth'
      )
      return true
    }
    return true
  }, 'Google OAuth 2.0 credentials is required in production and staging environments')

const parsedEnv = envSchema.safeParse(process.env)
if (!parsedEnv.success) throw new Error(JSON.stringify(parsedEnv.error, null, 2))

export const env = parsedEnv.data
