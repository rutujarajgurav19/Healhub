import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    strictPort: true,
    port: 3000
  },
  preview: {
    open: '/Applications/Google Chrome.app',
    host: true,
    strictPort: true,
    port: 3000
  }
})
