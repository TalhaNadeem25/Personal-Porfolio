import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Enable source maps for debugging
    sourcemap: true
  },
  // In case you're using client-side routing
  server: {
    historyApiFallback: true
  }
})