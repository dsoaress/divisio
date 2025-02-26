import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../../openapi-docs.json',
    output: {
      target: './src/services',
      biome: true,
      clean: true,
      httpClient: 'fetch',
      client: 'react-query',
      baseUrl: 'http://localhost:3000',
      mock: false,
      mode: 'tags'
    }
  }
})
