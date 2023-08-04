import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "git-issue-viewer",
  server: {
    proxy: {
      // with options: http://localhost:5173/api/bar-> http://localhost:5000/bar
      '/api': {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  },
 
})
