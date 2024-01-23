import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: true,
  base: '/nutaku-assignment/',
  build: {
    outDir: './docs',
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
