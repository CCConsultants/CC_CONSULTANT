import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT : Ajoute la propriété "base" pointant vers ton repo GitHub Pages.
  base: '/CC_CONSULTANT/',

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

