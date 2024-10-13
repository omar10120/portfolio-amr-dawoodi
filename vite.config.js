import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Disable inlining of images into the JavaScript bundle
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]' // Place images in assets folder
      }
    }
  }
})
 