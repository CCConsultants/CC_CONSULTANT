import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/', // Force le chemin racine pour le build
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
