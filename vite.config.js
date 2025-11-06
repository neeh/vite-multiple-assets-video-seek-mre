import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { DynamicPublicDirectory } from 'vite-multiple-assets'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    DynamicPublicDirectory([
      {
        input: 'videos/**',
        watch: true
      }
    ])
  ]
})
