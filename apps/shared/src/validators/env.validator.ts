import { z } from 'zod'

export const envValidator = z.object({
  APP_ENV: z.enum(['ci', 'test', 'local', 'staging', 'production']),
  SERVER_PORT: z.coerce.number(),
  WEB_PORT: z.coerce.number(),
  JWT_SECRET: z.string(),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  SERVER_URL: z.string().url(),
  PUBLIC_SERVER_URL: z.string().url(),
  WEB_URL: z.string().url(),
  COOKIE_DOMAIN: z.string(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GOOGLE_OAUTH_REDIRECT_URL: z.string().url()
})

export function envValidatorRefine(data: Partial<z.infer<typeof envValidator>>): boolean {
  const isCIEnv = data.APP_ENV === 'ci' || data.APP_ENV === 'test'
  const isLocalEnv = data.APP_ENV === 'local'
  const isProductionOrStagingEnv = data.APP_ENV === 'staging' || data.APP_ENV === 'production'
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
}

export const REFINE_ERROR_MESSAGE =
  'Google OAuth 2.0 credentials is required in production and staging environments'
