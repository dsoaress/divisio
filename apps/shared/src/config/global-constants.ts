export const GLOBAL_CONSTANTS = {
  COOKIES: {
    ACCESS_TOKEN: 'access-token',
    ACCESS_TOKEN_MAX_AGE: 60 * 15, // 15 minutes
    REFRESH_TOKEN: 'refresh-token',
    REFRESH_TOKEN_MAX_AGE: 60 * 60 * 24 * 30 // 30 days
  }
} as const
