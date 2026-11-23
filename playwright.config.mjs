import { defineConfig } from '@playwright/test'

const origin = 'http://127.0.0.1:4173'

export default defineConfig({
  use: { baseURL: origin },
  webServer: {
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort',
    url: origin
  }
})
