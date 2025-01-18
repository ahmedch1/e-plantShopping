import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://darling-frangipane-290669.netlify.app/",
  plugins: [react()],
})
