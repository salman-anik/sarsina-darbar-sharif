import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps the build portable for GitHub Pages / Vercel / Netlify
export default defineConfig({
  plugins: [react()],
  base: './',
})
