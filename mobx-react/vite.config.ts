import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { esbuildOptions: { loader: { ".jsx": "tsx" } } },
  plugins: [react({ babel: { plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]] } })],
})
