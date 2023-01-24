import { defineConfig, splitVendorChunkPlugin } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: true,
  }, plugins: [preact(), splitVendorChunkPlugin()],
})
