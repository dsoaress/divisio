import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    hookTimeout: 1000 * 10, // 10 seconds
    testTimeout: 1000 * 10, // 10 seconds
    slowTestThreshold: 0,
    include: ['**/?(*.){spec,int-spec,e2e-spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      enabled: true,
      include: ['apps/server/src', 'apps/web/src', 'apps/shared/src'],
      exclude: [
        '**/*.d.ts',
        '**/?(*.){spec,int-spec,e2e-spec}.?(c|m)[jt]s?(x)',
        'apps/web/src/app/layout.tsx',
        'apps/server/src/main.ts',
        'apps/shared/src/main.ts'
      ],
      reporter: ['text', 'html', 'lcov']
    }
  }
})
