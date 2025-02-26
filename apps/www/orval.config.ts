import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../../openapi-docs.json',
    output: {
      target: './src/services',
      clean: true,
      httpClient: 'axios',
      client: 'axios',
      baseUrl: 'http://localhost:3000',
      mock: false,
      mode: 'tags'
    }
  }
})
