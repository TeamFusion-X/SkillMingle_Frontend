import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Your backend URL
        changeOrigin: true,               // To handle virtual hosted sites
        secure: false,                    // Set to false if you're using HTTP instead of HTTPS
      },
    },
  },
})
