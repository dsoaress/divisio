import { defineConfig, mergeConfig } from 'vitest/config'

import baseConfig from '../../vitest.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      setupFiles: ['./vitest.setup.ts'],
      environment: 'jsdom'
    }
  })
)
