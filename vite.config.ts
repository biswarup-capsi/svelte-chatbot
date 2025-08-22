import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        // dev: false
      }
    })
  ],

  build: {
    cssCodeSplit: false, // inline CSS for smaller libs
    sourcemap: false,  // disable source maps
    emptyOutDir: true, // clean old files
    lib: {
      entry: "src/lib/Widget.svelte",
      name: 'ChatWidget',
      fileName: 'chat-widget',
      formats: ['es', 'umd', 'iife', 'system', 'cjs']
    },

    minify: 'terser',  // better tree-shaking and compresses more aggressively
    terserOptions: {
      compress: {
        passes: 3,
        ecma: 2020,
      }
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        compact: true, // reduces whitespace in output
        globals: {}
      },
    }
  }
})
