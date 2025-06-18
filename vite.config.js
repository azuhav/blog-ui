import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('Command:', command);
  console.log('Mode:', mode);
  if (mode === 'development') {
    return {
      plugins: [react()],
      define: {
        global: 'window',
      },
      server: {
        host: true,
        port: 3000,
        proxy: {
          '/api': {
            target: 'http://127.0.0.1:3001',
            changeOrigin: true,
            watch: {
              usePolling: true,
            },
          }
        }
      },
    }
  } else {
    return {
      plugins: [react()],
    }
  }
})
