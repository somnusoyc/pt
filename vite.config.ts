import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables from .env files, and also merge with existing process.env
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Safely expose the API_KEY to the client-side code strictly as process.env.API_KEY
      // Checks env.API_KEY, process.env.API_KEY, and falls back to GEMINI_API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || process.env.GEMINI_API_KEY)
    }
  }
})