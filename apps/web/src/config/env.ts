import { envValidator } from 'shared'

const parsedEnv = envValidator.safeParse(process.env)
if (!parsedEnv.success) throw new Error(JSON.stringify(parsedEnv.error, null, 2))

export const env = parsedEnv.data
