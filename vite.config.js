import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/breuss02.github.io/',
  plugins: [react()],
  // any other config you have
})
