import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this if you are deploying to a subfolder or custom domain
  build: {
    outDir: 'dist', // Default output directory
  },
})
 