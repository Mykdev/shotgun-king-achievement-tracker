import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shotgun-king-achievement-tracker/', // GitHub Pages base path
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs', // Changed from 'dist' to 'docs' for GitHub Pages
    sourcemap: true
  }
})
