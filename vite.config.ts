import { defineConfig, splitVendorChunkPlugin } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [preact(), splitVendorChunkPlugin()],
})
