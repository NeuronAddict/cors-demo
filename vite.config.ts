/// <reference types="vitest" />
// https://vitejs.dev/config/
import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteFonts from 'unplugin-fonts/vite'
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vuetify(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  build: {
    sourcemap: (process.env.MODE === 'development')
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./tests/setup.ts",
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
