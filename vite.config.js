import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import base44 from '@base44/vite-plugin'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  plugins: [
    base44({
      // Support for legacy code that imports the Base44 SDK
      // with @/integrations, @/entities, etc.
      legacySDKImports:
        process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',

      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true,
    }),

    react(),
  ],
})
