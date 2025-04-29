import { defineConfig } from 'vite'
import { URL, fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    eslintPlugin()
  ],
  esbuild: {
    treeShaking: false
  },
  build: {
    cssTarget: ['chrome61'],
    reportCompressedSize: false,
    sourcemap: false,
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
